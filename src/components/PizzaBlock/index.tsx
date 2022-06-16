import React, { useState } from 'react'

const typeNames = ['тонкое', 'традиционное']

type PizzaBlockProps = {
  id: number,
  title: string,
  price: number,
  imageUrl: string;
  types: number[];
  sizes: number[];
}

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  types,
  sizes
}) => {
  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const [open, setOpen] = useState(false)

  return (
    <div>
      <img src={imageUrl} alt={title} />
              <h2 className="text-xl font-bold">{title}</h2>
              <div className="flex justify-between items-center mt-4">
                <h4 className="font-semibold text-xl">от {price} ₽</h4>
                <button
                  onClick={() => setOpen(true)}
                  className="text-orange-500 rounded-3xl font-semibold bg-orange-100 hover:bg-orange-200 px-3 py-2"
                >Выбрать</button>

                { open ? <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                  <div className="bg-white rounded-md p-4 flex">
                    <img className="w-80" src={imageUrl} alt={title} />
                    <div className="space-y-3">
                      <h2 className="text-lg">{title}</h2>
                      <ul className="bg-zinc-300 rounded-3xl flex space-x-10  text-sm justify-center">
                        {
                        types.map(typeId => (
                          <div className="px-2 py-1">
                            <li
                              key={typeId}
                              onClick={() => setActiveType(typeId)}
                              className={activeType === typeId ? 'bg-zinc-100 rounded-3xl' : ''}
                            >{typeNames[typeId]}</li>
                          </div>
                        ))
                        }
                      </ul>
                      <ul className="bg-zinc-300 rounded-3xl flex space-x-10 text-sm justify-center">
                        {
                          sizes.map((size, i) => (
                          <div className="px-2 py-1">
                            <li
                              key={size}
                              onClick={() => setActiveSize(i)}
                              className={activeSize === i ? 'bg-zinc-100  rounded-3xl' : ''}
                            >{size} см.</li>
                          </div>
                          ))
                        }
                      </ul>
                      <button className="bg-orange-400 rounded-3xl py-3 px-7 text-white">Добавить в корзину за {price}₽</button>
                    </div>
                  </div>
                  <span onClick={() => setOpen(false)} className="text-white text-3xl p-3 cursor-pointer">X</span>
                </div> : ''}
                

              </div>
    </div>
  )
}

export default PizzaBlock