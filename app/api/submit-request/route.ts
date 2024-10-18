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
    const { name, instagram, whatsapp, date, timeSlot, style } = await req.json();

    // Insert data into database
    await sql`
      CREATE TABLE IF NOT EXISTS requests (
        id SERIAL PRIMARY KEY,
        name TEXT,
        instagram TEXT,
        whatsapp TEXT,
        date TEXT,
        time_slot TEXT,
        style TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      INSERT INTO requests (name, instagram, whatsapp, date, time_slot, style)
      VALUES (${name}, ${instagram}, ${whatsapp}, ${date}, ${timeSlot}, ${style})
    `;

    // Send Telegram message
    const message = `New photoshoot request:
Name: ${name}
Instagram: ${instagram}
WhatsApp: ${whatsapp}
Date: ${date}
Time: ${timeSlot}
Style: ${style}`;

    await sendTelegramMessage(message);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
  }
}