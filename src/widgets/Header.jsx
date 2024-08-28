import React from 'react'
import Logo from "../logo.svg"

function Header() {
    return (
        <header className='flex justify-between items-center h-20'>
            <img src={Logo} alt="" className="w-8 h-8" />
            <nav className='flex items-center'>
                <a href='#'>登录</a>
                <a href="#" className="ml-8 bg-gray-900 px-4 py-2 rounded text-blue-50 flex items-center">
                    注册
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 fill-neutral-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    ></svg>
                </a>
            </nav>
        </header>
    )
}

export default Header
