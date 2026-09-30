import { describe, it, expect, vi, beforeEach } from 'vitest'
import contactHandler from '../../server/api/contact.post.ts'

const mockSend = vi.fn()
// a class, not an arrow mock: Vitest 4 can't `new` an arrow function
vi.mock('resend', () => ({
  Resend: class {
    emails = { send: mockSend }
  }
}))

vi.stubGlobal('useRuntimeConfig', () => ({
  resend_api: 'mock-secret-key-12345',
  resend_mail: 'target-inbox@gmail.com'
}))

describe('Nitro Server Endpoint - POST /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('throws a 400 Bad Request error if required input field values are missing', async () => {
    const event = createMockEvent({
      body: { name: 'Test', email: '', message: '' }
    })

    await expect(contactHandler(event)).rejects.toThrowError(
      expect.objectContaining({
        statusCode: 400,
        statusMessage: 'Missing required contact form fields.'
      })
    )
  })

  it('returns a clean success true payload when the Resend client reports 200 success', async () => {
    mockSend.mockResolvedValue({
      error: null,
      id: 're_abc123'
    })

    const event = createMockEvent({
      body: { name: 'Ana', email: 'test@domain.com', message: 'Hello server!' }
    })

    const response = await contactHandler(event)

    expect(mockSend).toHaveBeenCalledTimes(1)
    expect(response).toEqual({
      success: true,
      data: { error: null, id: 're_abc123' }
    })
  })
})

// minimal JSON POST event that h3's readBody() can read
function createMockEvent(options: { body: Record<string, unknown> }) {
  return {
    method: 'POST',
    context: {},
    node: {
      req: {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(options.body)
      },
      res: {}
    },
    _handled: false
  } as unknown as Parameters<typeof contactHandler>[0]
}
