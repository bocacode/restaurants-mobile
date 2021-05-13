import React, { useState } from 'react'
import { SafeAreaView, Image, View, Alert } from 'react-native'
import { Card, Rating, Text, Button } from 'react-native-elements'

function ResDetailScreen(props) {
  const { restaurant } = props.route.params
  const [rating, setRating] = useState()

  const sendRating = () => {
    fetch(`https://bocacode-intranet-api.web.app/restaurants/${restaurant.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: rating }),
    })
      .then(response => response.json())
      .then(() => props.navigation.navigate('Home'))
      .catch(err => Alert.alert(err))
  }

  return (
    <SafeAreaView>
      <Image source={{ uri: restaurant.photoUrl }} style={{ width: '100%', height: 200 }} />
      <View style={{ width: 300, marginHorizontal: 20, marginVertical: 20 }}>
        <Text h3> {restaurant.name}</Text>
        <Text style={{ marginLeft: 20 }}> {restaurant.address}</Text>
      </View>
      <Card>
        <Rating style={{marginVertical: 25 }} showRating ratingCounting="{5}" onFinishRating={(rating) => setRating(rating)} />
      <Button  onPress={() => sendRating()} title='Send Rating' style={{ width: 200, alignSelf: 'center' }} />
      </Card>
    </SafeAreaView>
  )
}

export default ResDetailScreen