import { HelloApiResponse } from 'components/hello/api'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloApiResponse>
) {
  res.status(200).json({ name: 'Mario Doe' })
}
