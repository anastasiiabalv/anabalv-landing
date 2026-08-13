import { Resend } from 'resend'
import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, message } = body
  const config = useRuntimeConfig(event)
  const resend = new Resend(config.resend_api)
  const MAIL = config.resend_mail

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required contact form fields.'
    })
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: MAIL || '',
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `
    })
    if (data.error && data.error?.statusCode != 200 && data.error?.statusCode != 201)
      return { success: false, data } as Resendcall
    return { success: true, data } as Resendcall
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to process email dispatch loop. error: ' + (error || 'Unknown error')
    })
  }
})
