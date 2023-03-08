import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { addItem } from '../store/actions/cart.action'


const DetailsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state.products.selected)
  useEffect(() => {
    console.log(route.params)
  }, [])

  const handleAddItem = () => {
    dispatch(addItem(selector))
  }
  
  return (
    <View style={styles.container}>
      <Text>{selector.name}</Text>
      <Text>{selector.description}</Text>
      <Text>${selector.price}</Text>
      <Button title='Add to cart' onPress={handleAddItem}/>
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