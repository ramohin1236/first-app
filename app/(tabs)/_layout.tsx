import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "StickerSmash",
          headerLeft: () => null,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          headerLeft: () => null,
        }}
      />
    </Tabs>
  );
}
