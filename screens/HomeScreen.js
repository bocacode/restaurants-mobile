import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import SingleRestaurant from '../components/SingleRestaurant'

function HomeScreen() {
  const [restaurants, setRestaurants] = useState()

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Text h2> Boca Code Restaurants</Text>
      <ScrollView>
        {restaurants &&
          restaurants.map(eachRestaurant => {
            return <SingleRestaurant key={eachRestaurant.id} eachRestaurant={eachRestaurant} />
          })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
