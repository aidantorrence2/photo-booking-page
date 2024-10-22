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
    const { name, instagram, style, comment, location } = await req.json();

    // Check if the table exists and create it if it doesn't
    await sql`
      CREATE TABLE IF NOT EXISTS requests (
        id SERIAL PRIMARY KEY,
        name TEXT,
        instagram TEXT,
        style TEXT,
        comment TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Check if the location column exists and add it if it doesn't
    await sql`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'requests' AND column_name = 'location') THEN
          ALTER TABLE requests ADD COLUMN location TEXT;
        END IF;
      END $$;
    `;

    // Insert data into database
    await sql`
      INSERT INTO requests (name, instagram, style, location, comment)
      VALUES (${name}, ${instagram}, ${style}, ${location}, ${comment})
    `;

    // Send Telegram message
    const message = `New photoshoot request:
Name: ${name}
Instagram: ${instagram}
Style: ${style}
Location: ${location}
Comment: ${comment}`;

    await sendTelegramMessage(message);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
  }
}
