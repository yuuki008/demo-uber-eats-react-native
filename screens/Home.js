import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/home/HeaderTabs'
import { localRestaurants } from '../components/home/RestaurantItems'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [activeTab, setActiveTab] = useState('Delivery')
  const [city, setCity] = useState("San Francisco")
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }} >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
      </View>
      <Categories />
    </SafeAreaView>
  )
}

export default Home
