import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation'
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    Unbounded: require('./src/assets/fonts/Unbounded-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  ) 
}
