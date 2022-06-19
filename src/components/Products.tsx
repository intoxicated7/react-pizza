import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sort from './Sort';
import Categories from './Categories';
import PizzaBlock from './PizzaBlock/index';
import Skeleton from './PizzaBlock/Skeleton';

type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
}


const Products = (): JSX.Element => {

  const [items, setItems] = useState<Pizza[]>()
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState({
    name: 'популярности (⬇)',
    sortProperty: 'rating'
  })

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)

      const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

      const { data } = await axios.get(`https://62a71e65bedc4ca6d7c27ec2.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.sortProperty.replace('-', '')}&order=${order}`,
      )
      setItems(data)
      setIsLoading(false)
    }

    fetchItems()
  }, [categoryId, sortType])

  return (
    <div className="max-w-7xl mx-auto mt-4">
      <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Все пиццы</h2>
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {
          isLoading ? [...new Array(8)].map(() => <Skeleton />) : items?.map(item => (
              <PizzaBlock 
                item={item}     
              />
          ))
        }
      </div>
    </div>
  )
}

export default Products