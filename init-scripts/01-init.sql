-- Initialize the Exodos database
-- This script runs automatically when the PostgreSQL container starts

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);

-- Insert some sample data (optional - remove in production)
INSERT INTO contacts (name, email) VALUES 
    ('John Doe', 'john.doe@example.com'),
    ('Jane Smith', 'jane.smith@example.com')
ON CONFLICT (email) DO NOTHING;

-- Grant permissions to the application user
GRANT SELECT, INSERT, UPDATE, DELETE ON contacts TO exodos_user;
GRANT USAGE, SELECT ON SEQUENCE contacts_id_seq TO exodos_user;
