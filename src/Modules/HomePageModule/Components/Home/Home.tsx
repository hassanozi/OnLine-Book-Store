import React from 'react'
import SwiperComp from '../Swiper/SwiperComp'
import TopCategory from '../TopCategories/TopCategory'
import FeatureBook from '../FeaturedBook/FeatureBook'
import DiscountBooks from '../DiscountBooks/DiscountBooks'
import SubscribeNewsLetter from '../SubscribeNewsLetter/SubscribeNewsLetter'
import LatestArticle from '../LatestArticle/LatestArticle'
import NewBooks from '../NewBooks/NewBooks'

export default function Home() {
  return (

    <>
        <SwiperComp/>
        <TopCategory/>
        <NewBooks/>
        <FeatureBook/>
        <DiscountBooks/>
        <SubscribeNewsLetter/>
        <LatestArticle/>
    </>

    
  )
}
