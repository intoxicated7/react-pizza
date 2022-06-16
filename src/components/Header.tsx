import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between items-center py-3 mt-4">
      <div className="flex justify-center items-center space-x-4">
        <div>
          <img className='h-10' src={Logo} alt="React Pizza" />
        </div>
        <div>
          <h1 className="font-bold uppercase text-2xl">React pizza</h1>
          <p className="text-zinc-500">самая вкусная пицца во вселеной</p>
        </div>
      </div>
      <div>
        <button className="bg-orange-400 text-white rounded-3xl px-4 py-2">
          <Link to="/cart">Корзина (0)</Link>
        </button>
      </div>
    </div>
  )
}

export default Header