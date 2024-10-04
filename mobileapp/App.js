import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View,SafeAreaView } from 'react-native';
import SignIn from './MobilComponent/SignIn';
import VibeNest from './MobilComponent/VibeNest';
import { UserProvider } from './MobilComponent/UserContext';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <View style={styles.container}>
    <UserProvider>
      
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="VibeNest" component={VibeNest} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </UserProvider>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
