import React from 'react'

interface NavBarProps {
  onSendEmail: () => void
}

const NavBar: React.FC<NavBarProps> = ({ onSendEmail }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Email Preview</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a onClick={onSendEmail}>发送到测试邮箱</a></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
