import React, { useState } from 'react'
import { useCart } from 'react-use-cart';

const typeNames = ['тонкое', 'традиционное']

type PizzaBlockProps = {
  item: {
    id: string,
    title: string,
    price: number,
    imageUrl: string;
    types: number[];
    sizes: number[];
  }
}

const PizzaBlock: React.FC<PizzaBlockProps> = ({ item }) => {
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const [open, setOpen] = useState(false)

  const { addItem } = useCart()

  return (
    <div>
      <img src={item.imageUrl} alt={item.title} />
              <h2 className="text-xl font-bold">{item.title}</h2>
              <div className="flex justify-between items-center mt-4">
                <h4 className="font-semibold text-xl">от {item.price} ₽</h4>
                <button
                  onClick={() => setOpen(true)}
                  className="text-orange-500 rounded-3xl font-semibold bg-orange-100 hover:bg-orange-200 px-3 py-2"
                >Выбрать</button>

                { open ? <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center ">
                  <div style={{ height: 500 }} className="bg-white rounded-2xl p-4 flex">
                    <div className="flex items-center justify-center" style={{ width: 480 }}>
                      <img
                        className={`${
                          activeSize === 0 ? 'scale-50 transition ease-linear duration-300' : ''}
                          ${activeSize === 1 ? 'scale-[.60] transition ease-linear duration-300' : ''}
                          ${activeSize === 2 ? 'scale-75 transition ease-linear duration-300' : ''
                        }`}
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                    <div className="space-y-3 relative " style={{ width: 300 }}>
                      <h2 className="text-lg">{item.title}</h2>
                      <ul className="bg-zinc-300 rounded-3xl flex  text-sm ">
                        {
                        item.types.map(typeId => (
                          <div className="px-1 py-1 cursor-pointer flex-1 text-center">
                            <li
                              key={typeId}
                              onClick={() => setActiveType(typeId)}
                              className={activeType === typeId ? 'bg-zinc-100 rounded-3xl w-full' : ''}
                            >{typeNames[typeId]}</li>
                          </div>
                        ))
                        }
                      </ul>
                      <ul className="bg-zinc-300 rounded-3xl flex  text-sm ">
                        {
                          item.sizes.map((size, i) => (
                          <div className="px-1 py-1 cursor-pointer text-center flex-1">
                            <li
                              key={size}
                              onClick={() => setActiveSize(i)}
                              className={activeSize === i ? 'bg-zinc-100  rounded-3xl' : ''}
                            >{size} см.</li>
                          </div>
                          ))
                        }
                      </ul>
                      <div className="absolute bottom-0">
                        <button 
                          className="bg-orange-400 rounded-3xl py-3 text-white px-10"
                          onClick={() => { 
                            addItem((item), 1)
                            setOpen(false)
                           }}
                        >Добавить в корзину за {item.price}₽</button>
                      </div>
                    </div>
                  </div>
                  <span onClick={() => setOpen(false)} className="text-white text-3xl p-3 cursor-pointer hover:scale-110 transition ease-in-out delay-100 first:items-start">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z" fill="white"></path>
                    </svg>
                  </span>
                  
                </div> : ''}
                

              </div>
    </div>
  )
}

export default PizzaBlock