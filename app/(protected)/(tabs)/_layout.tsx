// app/(protected)/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Workout',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="exercises"
        options={{
          title: 'Exercises',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
