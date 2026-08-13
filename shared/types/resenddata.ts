import type { CreateEmailResponse } from 'resend'
export interface ResendCall {
  success: boolean
  data: CreateEmailResponse
}
