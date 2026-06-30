import { NextRequest, NextResponse } from 'next/server'

const FIREBASE_URL = 'https://portfolio-hitarth-default-rtdb.firebaseio.com/contact.json'
const LOOPS_API_KEY = process.env.LOOPS_API_KEY

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, subject, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const results: Record<string, string> = {}

  // 1. Loops — create/update contact
  if (LOOPS_API_KEY) {
    try {
      const nameParts = name.trim().split(' ')
      const firstName = nameParts[0] ?? ''
      const lastName = nameParts.slice(1).join(' ') ?? ''

      const contactRes = await fetch('https://app.loops.so/api/v1/contacts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${LOOPS_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          source: 'Portfolio Contact Form',
          subscribed: true,
          userGroup: 'Portfolio Inquiry',
        }),
      })
      results.loops_contact = contactRes.ok ? 'ok' : `${contactRes.status}`
    } catch {
      results.loops_contact = 'error'
    }

    // 2. Loops — fire event to trigger automation
    try {
      const eventRes = await fetch('https://app.loops.so/api/v1/events/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${LOOPS_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          eventName: 'portfolioInquiry',
          eventProperties: { name, subject: subject || '(no subject)', message },
        }),
      })
      results.loops_event = eventRes.ok ? 'ok' : `${eventRes.status}`
    } catch {
      results.loops_event = 'error'
    }
  } else {
    results.loops_contact = 'skipped (no api key)'
    results.loops_event = 'skipped (no api key)'
  }

  // 3. Firebase — log inquiry
  try {
    const fbRes = await fetch(FIREBASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message, timestamp: new Date().toISOString() }),
    })
    results.firebase = fbRes.ok ? 'ok' : `${fbRes.status}`
  } catch {
    results.firebase = 'error'
  }

  return NextResponse.json({ success: true, results })
}
