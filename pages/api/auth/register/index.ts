import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import prisma from '../../../../lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const result = await prisma.user.create({
      data: {
        email: email,
        hashedPassword: hashedPassword
      }
    })
    res.status(201).json(result)
  } else {
    res.status(200).json({ name: 'John Doe' })
  }
}
