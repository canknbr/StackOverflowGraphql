import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";

import { useQuery, gql } from "@apollo/client";
import { getQuestion } from "../src/query/Queries";
export default function Page() {
  const { loading, error, data } = useQuery(getQuestion);
  if (loading) return <ActivityIndicator size={"large"} />;
  if (error) return <Text>Error :(</Text>;
  const items = data?.questions?.items;

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
