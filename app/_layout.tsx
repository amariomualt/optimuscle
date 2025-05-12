import { Stack } from "expo-router";
import './global.css';
import { AuthProvider } from "@/utils/authContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
      <Stack.Screen
          name="(protected)"
          options={{
            headerShown: false,
            animation: "none"
          }}
      />
      <Stack.Screen
          name="login"
          options={{
            headerShown: false,
            animation: "none"
          }}
      />
      <Stack.Screen
          name="gym/[id]"
          options={{
            headerShown: false
          }}
      />
      </Stack>
    </AuthProvider>
  )
}
