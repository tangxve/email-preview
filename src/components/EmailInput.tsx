import React from 'react'

interface EmailInputProps {
  email: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const EmailInput: React.FC<EmailInputProps> = ({ email, onChange }) => {

  return (
    <div className="form-control w-full mb-8">
      <label className="label">
        <span className="label-text text-xl">输入邮箱，多个邮箱使用,拼接：xxx@qq.com,xxx@163.com,xxx@gmail.com</span>
      </label>
      <input type="text" onChange={onChange} placeholder="输入邮箱，多个邮箱使用,拼接"
             className="input input-bordered w-full" />
    </div>
  )
}

export default EmailInput
