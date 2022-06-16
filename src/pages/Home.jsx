import React from 'react'


const Products = React.lazy(() => import('../components/Products'))

const Home = () => {
  return (
    <div>
      <Products />
    </div>
  )
}

export default Home