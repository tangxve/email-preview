import React, { useState } from 'react'

import NavBar from '@/src/components/NavBar'
import HtmlInput from '@/src/components/HtmlInput'
import EmailInput from '@/src/components/EmailInput'

export default function Home() {
  // 邮箱
  const [email, setEmail] = useState('')

  const [html, setHtml] = useState('')

  const onTestEmail = () => {
    console.log('email', email)
    console.log('html', html)

    if(!email) {
      alert('请输入邮箱')
      return
    }

    if(!html) {
      alert('请输入html')
      return
    }
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
      <NavBar onTestEmail={onTestEmail} />
      <div className="p-8">
        <EmailInput email={email} onChange={onEmailChange} />
        <HtmlInput htmlText={html} onChange={onHtmlChange} />
      </div>
    </main>
  )
}
