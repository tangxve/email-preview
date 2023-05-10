import React from 'react'

interface HtmlInputProps {
  htmlText: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const HtmlInput: React.FC<HtmlInputProps> = ({ htmlText, onChange }) => {
  return (
    <div className="form-control flex-auto flex flex-col">
      <label className="label">
        <span className="label-text text-2xl">html</span>
      </label>
      <textarea onChange={onChange} className="textarea textarea-bordered flex-auto" placeholder="html text"></textarea>
    </div>
  )
}

export default HtmlInput
