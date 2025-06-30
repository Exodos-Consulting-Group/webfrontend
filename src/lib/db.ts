import { Pool } from 'pg';

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Initialize database tables
export async function initializeDatabase() {
  const client = await pool.connect();
  
  try {
    // Create contacts table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    // Create index on email for faster lookups
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
    `);
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Contact interface
export interface Contact {
  id?: number;
  name: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}

// Insert a new contact
export async function createContact(contact: Omit<Contact, 'id' | 'created_at' | 'updated_at'>) {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      'INSERT INTO contacts (name, email) VALUES ($1, $2) RETURNING *',
      [contact.name, contact.email]
    );
    
    return result.rows[0] as Contact;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Get all contacts
export async function getContacts(): Promise<Contact[]> {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      'SELECT * FROM contacts ORDER BY created_at DESC'
    );
    
    return result.rows as Contact[];
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Check if email already exists
export async function emailExists(email: string): Promise<boolean> {
  const client = await pool.connect();
  
  try {
    const result = await client.query(
      'SELECT COUNT(*) FROM contacts WHERE email = $1',
      [email]
    );
    
    return parseInt(result.rows[0].count) > 0;
  } catch (error) {
    console.error('Error checking email:', error);
    throw error;
  } finally {
    client.release();
  }
}

// Close the pool (useful for cleanup)
export async function closePool() {
  await pool.end();
}

export default pool;
