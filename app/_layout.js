import { Link, Stack } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import client from "../src/provider/ApolloProvider";
import { AntDesign } from "@expo/vector-icons";
const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerRight: () => (
              <Link href={"/search"} style={{ marginRight: 20 }}>
                <AntDesign name="search1" size={24} color="dimgray" />
              </Link>
            ),
          }}
        />
        <Stack.Screen name="[id]" options={{ title: "Question" }} />
      </Stack>
    </ApolloProvider>
  );
};

export default RootLayout;
