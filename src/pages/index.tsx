import React, { useState } from 'react'

import NavBar from '@/src/components/NavBar'
import HtmlInput from '@/src/components/HtmlInput'
import EmailInput from '@/src/components/EmailInput'
import axios from 'axios'

export default function Home() {
  // 邮箱
  const [email, setEmail] = useState('')

  const [html, setHtml] = useState('')


  const onSendEmail = async () => {
    if (!email) {
      alert('请输入邮箱')
      return
    }

    if (!html) {
      alert('请输入html')
      return
    }

    const res = await axios.post('/api/send', {
      email,
      html
    })
  }

  // EmailInput change 修改邮箱
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  // HtmlInput change 修改html
  const onHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtml(e.target.value)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <NavBar onSendEmail={onSendEmail} />
      <div className="p-8 flex-auto flex flex-col">
        <EmailInput email={email} onChange={onEmailChange} />
        <HtmlInput htmlText={html} onChange={onHtmlChange} />
      </div>
    </main>
  )
}
