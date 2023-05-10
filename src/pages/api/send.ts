// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const sendEmail = async (htmlContent: string, to: string) => {
  const transporter = nodemailer.createTransport({
    service: '163',
    auth: {
      user: 'ee_review@163.com',
      pass: 'WDBFHBUIDNIVAHSL',
    },
    tls: {
      rejectUnauthorized: false,
    }
  })

  const mailOptions = {
    from: 'ee_review@163.com',
    to,
    subject: '邮件预览',
    html: htmlContent,
  }

  await transporter.sendMail(mailOptions)

  console.log(`Send email to ${to} success`)
}

export default async function send(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  try {
    const { email, html } = req.body

    await sendEmail(html, email)

    return res.status(200).json({ status: 'success' })

  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
