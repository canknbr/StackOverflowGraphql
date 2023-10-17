import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React from "react";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import questions from "../src/data/questions.json";
import answers from "../src/data/answers.json";
import QuestionHeader from "../src/components/QuestionHeader";
import AnswerListItem from "../src/components/AnswerListItem";
import { FlatList } from "react-native-gesture-handler";
import { useQuery, gql } from "@apollo/client";
import { getQuestionQuery } from "../src/query/Queries";
const QuestionDetailPage = () => {
  const { id } = useGlobalSearchParams();

  const { loading, error, data } = useQuery(getQuestionQuery, {
    variables: {
      id: +id,
    },
  });

  if (loading) return <ActivityIndicator size={"large"} />;
  if (error) return <Text>Error :(</Text>;
  const question = data?.question?.items[0];
  if (!question) return <Text>Question not found :(</Text>;
  const answers = data?.question?.items[0].answers;
  return (
    <View
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white", padding: 10 }}>
      <FlatList
        data={answers}
        renderItem={({ item }) => <AnswerListItem answer={item} />}
        keyExtractor={(item) => item.answer_id.toString()}
        ListHeaderComponent={<QuestionHeader question={question} />}
      />
    </View>
  );
};

export default QuestionDetailPage;
