import { NextRequest, NextResponse } from 'next/server';
import { createContact, emailExists, initializeDatabase } from '@/lib/db';

// Initialize database on first API call
let dbInitialized = false;

async function ensureDbInitialized() {
  if (!dbInitialized) {
    await initializeDatabase();
    dbInitialized = true;
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureDbInitialized();
    
    const body = await request.json();
    const { name, email } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const exists = await emailExists(email);
    if (exists) {
      return NextResponse.json(
        { error: 'This email address has already been submitted' },
        { status: 409 }
      );
    }

    // Create contact
    const contact = await createContact({
      name: name.trim(),
      email: email.toLowerCase().trim(),
    });

    return NextResponse.json(
      { 
        message: 'Contact saved successfully',
        contact: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureDbInitialized();
    
    // This endpoint could be used to fetch contacts (for admin purposes)
    // For now, just return a simple response
    return NextResponse.json(
      { message: 'Contact API is working' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
