import React from 'react'
import HomeDefCont from '../../components/home-def-cont/home-def-cont'
import Partner from '../../components/partners/partner'
import Products from '../../components/products/products'
import Def2 from '../../components/def-2/def-2'
import Comments from '../../components/customers-comments/comments'

const Home = () => {
  return (
    <div id='hmm'>
      <HomeDefCont />
      <Partner />
      <Products />
      <Def2 />
      <Comments />
    </div>
  )
}

export default Home