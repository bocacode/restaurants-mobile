import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  Button,
  ImageBackground,
  ScrollView,
} from 'react-native'
import { Card } from 'react-native-elements'

export default function App() {
  // console.log('this is the platform', Platform.OS == 'ios' ? true : false)
  const [restaurants, setRestaurants] = useState()

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(err => console.log(err))
  }, [])

  console.log(restaurants)

  return (
    <ImageBackground source={require('./assets/bk.jpg')} style={{ display: 'flex', height: '100%' }}>
      <SafeAreaView style={styles.container}>
        <ScrollView horizontal={true}>
          {restaurants &&
            restaurants.map(eachRestaurant => {
              return (
                <View>
                  <Card containerStyle={{maxWidth: 300}}>
                    <Card.Title> {eachRestaurant.name}</Card.Title>
                    <Card.Divider />
                    <Card.Image     
                      source={{
                        uri: eachRestaurant.photoUrl,
                      }}
                    >
                      <Text style={styles.containerHeading}>{eachRestaurant.address}</Text>
                      <Button
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW'
                      />
                    </Card.Image>
                  </Card>

                  {/* <Image
                    style={styles.containerImg}
                    source={{
                      uri: eachRestaurant.photoUrl,
                    }}
                    // source={require('./assets/bclogo.png')}
                  />
                  <Text style={styles.containerHeading}>{eachRestaurant.name}</Text>
                  <Text style={styles.containerText}>{eachRestaurant.address}</Text>
                  <Button title='get me data' onPress={() => console.log('button pressed here')} /> */}
                </View>
              )
            })}
        </ScrollView>
        <TextInput style={styles.inputFields} placeholder='Restaurant Name' />
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  containerText: {
    color: 'white',
  },
  containerImg: {
    width: 300,
    height: 200,
  },
  inputFields: {
    alignSelf: 'center',
    height: 40,
    width: '80%',
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#efefef',
    marginVertical: 10,
  },
})
