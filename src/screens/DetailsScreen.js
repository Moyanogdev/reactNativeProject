import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'


const DetailsScreen = ({ navigation, route }) => {
  const selector = useSelector(state => state.products.selected)
  useEffect(() => {
    console.log(route.params)
  }, [])
  
  return (
    <View style={styles.container}>
      <Text>{selector.name}</Text>
      <Text>{selector.description}</Text>
      <Text>${selector.price}</Text>
      <Button title='Add to cart' onPress={() => console.log('add to cart')}/>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})