import React from 'react'
import EmptyCart from '../assets/empty-cart.png'
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  let navigate = useNavigate()

  return (
    <>
      <h1 className="text-5xl font-bold pt-10">Коризна</h1>
      <span className="text-md text-zinc-700">К сожалению она пустая, вы можете добавить наши продукты из списка и они окажутся здесь.</span>
      <img className="mx-auto w-80"  src={EmptyCart} alt="" />
      <button onClick={() => navigate(-1)} className="bg-zinc-800 rounded-3xl py-2 px-3 text-white">Вернуться назад</button>
    </>
  )
}

export default CartEmpty