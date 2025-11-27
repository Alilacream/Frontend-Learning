import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text> Hi there </Text>
      <Link href={"/tabs/login"}> Login Page</Link>
    </View>
  );
}
