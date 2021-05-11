import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
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
      <ScrollView>
        {!restaurants ? (
          <ActivityIndicator size='large' />
        ) : (
          restaurants.map(eachRestaurant => {
            return (
              <TouchableOpacity key={eachRestaurant.id}
                onPress={() => navigation.navigate('ResDetails', { restaurant: eachRestaurant })}
              >
                <SingleRestaurant key={eachRestaurant.id} eachRestaurant={eachRestaurant} />
              </TouchableOpacity>
            )
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
