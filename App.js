import { StyleSheet, Dimensions } from 'react-native';
import { AppContainer, AuthenticationContainer } from './containers';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_400: require('./assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_700: require('./assets/fonts/Montserrat-Bold.ttf'),
    Montserrat_500: require('./assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_600: require('./assets/fonts/Montserrat-SemiBold.ttf')
  });
  console.log(fontsLoaded)

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);


  return (
        <AuthenticationContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width
  },
});
