import { HelloApiResponse } from 'components/Hello/api'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloApiResponse>
) {
  res.status(200).json({ name: 'John Doe' })
}
