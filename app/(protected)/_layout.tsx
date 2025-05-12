import { AuthContext } from '@/utils/authContext';
import { Redirect, Stack } from 'expo-router';
import { useContext } from 'react';

export const unstable_settings = {
  initialRouteName: '(tabs)'
};

const isLoggedIn = false; // Replace with your authentication logic

export default function ProtectedLayout() {
  const authState = useContext(AuthContext);

  if (!authState.isReady) {
    return null; 
  } 
  
  if (!authState.isLoggedIn) {
    return <Redirect href="../login"/>
   }
    return (
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false 
          }} 
        />
      </Stack>
    );
}