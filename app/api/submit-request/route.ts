import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendTelegramMessage(message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send Telegram message');
  }
}

export async function POST(req: Request) {
  try {
    const { email, instagram, style, comment, location, budget } = await req.json();

    // Check if the table exists and create it if it doesn't
    await sql`
      CREATE TABLE IF NOT EXISTS requests (
        id SERIAL PRIMARY KEY,
        email TEXT,
        instagram TEXT,
        style TEXT,
        comment TEXT,
        location TEXT,
        budget INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Check if the email column exists and add it if it doesn't
    await sql`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'requests' AND column_name = 'email') THEN
          ALTER TABLE requests ADD COLUMN email TEXT;
        END IF;
      END $$;
    `;

    // Insert data into database
    await sql`
      INSERT INTO requests (email, instagram, style, location, comment, budget)
      VALUES (${email}, ${instagram}, ${style}, ${location}, ${comment}, ${budget})
    `;

    // Send Telegram message
    const message = `New photoshoot request:
Email: ${email}
Instagram: ${instagram}
Style: ${style}
Location: ${location}
Budget: $${budget}
Comment: ${comment}`;

    await sendTelegramMessage(message);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
  }
}
