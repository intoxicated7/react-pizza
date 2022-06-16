import React from 'react'
import { useCart } from 'react-use-cart'
import CartEmpty from './CartEmpty'
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const {
    items,
    isEmpty,
    removeItem,
    updateItemQuantity,
    cartTotal,
    totalItems,
    emptyCart
  } = useCart()

  let navigate = useNavigate()

  if (isEmpty) return <CartEmpty />
  return (
    <div className="ml-auto mr-auto" style={{ width: 860 }}>
      <div className="flex justify-between items-center">
        <div className="font-bold text-3xl flex space-x-3">
          <svg className="stroke-black " width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"  stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"  stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <h2>Корзина</h2>
        </div>
        <h3 onClick={() => emptyCart()} className="text-zinc-400 font-semibold hover:text-zinc-500">Очистить корзину</h3>
      </div>

      <ul className="flex flex-col space-y-3">
        {
          items.map((item, i) => 
              <li className="border border-1 rounded-3xl p-3 border-slate-100 flex items-center space-x-3" key={i}>
                <div className="w-[10%]">
                  <img  src={item.imageUrl} alt="" />
                </div>
                <div className="w-[40%] text-left">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <span className="text-zinc-600">тонкое, 26см.</span>
                </div>
                <div className="flex space-x-3 w-[15%]">
                  <button
                    disabled={false}
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    className="flex justify-center items-center fill-zinc-400 w-6 h-6 rounded-full border-zinc-400  border-2 hover:border-orange-400 hover:bg-orange-400 hover:fill-white "
                  >
                    <svg className="" width="10" height="10" viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">    
                      <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" ></path>
                    </svg>
                  </button>
                  <span className="font-bold text-orange-500 text-lg">{item.quantity}</span>
                  <button 
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    className="flex justify-center items-center fill-zinc-400 w-6 h-6 rounded-full border-zinc-400  border-2 hover:border-orange-400 hover:bg-orange-400 hover:fill-white "
                  >
                    <svg className="" width="10" height="10" viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" ></path>
                      <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" ></path>
                    </svg>
                  </button>
                </div>
                <div className="font-bold text-xl w-[35%]">
                  {item.price} ₽
                </div>
                <div className="w-[5%]">
                  <div onClick={() => removeItem(item.id)} className="flex justify-center items-center fill-zinc-400 w-6 h-6 rounded-full border-zinc-400  border-2 hover:border-zinc-800 hover:bg-zinc-800 hover:fill-white">
                    <svg className="rotate-45" width="10" height="10" viewBox="0 0 10 10"  xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" ></path>
                      <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" ></path>
                    </svg>
                  </div>
                </div>
              </li>
          )
        }
      </ul>
      <div className="flex justify-between items-center text-lg">
        <span>Всего пицц: <b>{totalItems} шт.</b></span>
        <span>В сумме: <b className="text-orange-500">{cartTotal} ₽</b></span>
      </div>
      <div className="flex items-center justify-between mt-6 text-lg">
        <button 
          onClick={() => navigate(-1)}
          className="border-2 border-zinc-300 rounded-3xl py-[8px] px-8 text-lg text-zinc-500 stroke-zinc-500 hover:text-white hover:stroke-white hover:border-zinc-800 hover:bg-zinc-800 font-semibold flex items-center space-x-3"
        >
          <svg className="" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L1 6.93015L6.86175 1"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span>Вернуться назад</span>
        </button>
        <button className="bg-orange-500 rounded-3xl py-[8px] px-8 text-lg text-white font-semibold">Оплатить заказ</button>
      </div>
    </div>
  )
}

export default CartItem