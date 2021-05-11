import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Button, Text } from 'react-native-elements'
import SingleRestaurant from '../components/SingleRestaurant'

function HomeScreen({ navigation }) {
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

      <Button title='Res Details' onPress={() => navigation.navigate('ResDetails')} />
      <ScrollView>
        {!restaurants ? (
          <ActivityIndicator size='large' />
        ) : (
          restaurants.map(eachRestaurant => {
            return <SingleRestaurant key={eachRestaurant.id} eachRestaurant={eachRestaurant} />
          })
        )}
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
