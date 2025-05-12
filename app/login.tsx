// app/login.tsx
import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '@/utils/authContext';

export default function LoginScreen() {
  const authContext = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="Log in!" onPress={authContext.logIn}></Button>
    </View>
  );
}
