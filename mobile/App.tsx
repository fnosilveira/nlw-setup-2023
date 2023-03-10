import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_800ExtraBold 
} from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';

export default function App() {
  const  [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });
  
  if (!fontsLoaded) {
    return (
      <Loading/>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.textw}>Open up App.tsx to start working on your app!</Text>
      <StatusBar barStyle="light-content" translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: '#7C3AED'
  },
  textw: {
    fontFamily: 'Inter_400Regular',
    color: 'white'
  }
});
