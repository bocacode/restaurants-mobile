import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { Text, FAB} from 'react-native-elements'
import { Directions } from 'react-native-gesture-handler'
import SingleRestaurant from '../components/SingleRestaurant'

function HomeScreen({ navigation }) {
  const [restaurants, setRestaurants] = useState()

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.direction}>
      <FAB color='red' title="Random" />
      </View>
      <Text style={styles.title}> Boca Code Restaurants </Text>
      <ScrollView>
        {!restaurants ? (
          <ActivityIndicator size="large" />
        ) : (
          restaurants.map((eachRestaurant) => {
            return (
              <TouchableOpacity
                key={eachRestaurant.id}
                onPress={() =>
                  navigation.navigate('ResDetails', {
                    restaurant: eachRestaurant,
                  })
                }
              >
                <SingleRestaurant
                  key={eachRestaurant.id}
                  eachRestaurant={eachRestaurant}
                />
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
   direction: {
    flexDirection: "row",
    flexWrap: "wrap",
   },
   title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
   }
   
})

export default HomeScreen
