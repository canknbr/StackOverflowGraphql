import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useLayoutEffect, useMemo, useState } from "react";
import { useNavigation } from "expo-router";
import { searchQuery } from "../src/query/Queries";
import { useQuery } from "@apollo/client";
import QuestionListItem from "../src/components/QuestionListItem";
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, error, data, refetch } = useQuery(searchQuery, {
    variables: {
      term: searchTerm,
    },
  });
  const navigation = useNavigation();
  const search = useMemo(() => {
    refetch({
      term: searchTerm,
    });
  }, [searchTerm]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event) => setSearchTerm(event.nativeEvent.text),
        onBlur: search,
      },
    });
  }, [navigation, searchTerm, setSearchTerm]);
  if (loading) return <ActivityIndicator />;
  if (error) return <Text>Error :(</Text>;
  console.log(data.search);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={data.search.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
      />
    </View>
  );
};

export default SearchScreen;
