import { StyleSheet, View, FlatList } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import questionData from "../src/data/questions.json";

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={questionData.items}
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
