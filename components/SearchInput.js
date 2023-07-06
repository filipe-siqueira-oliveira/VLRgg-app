import React from "react";
import { View, TextInput } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const SearchInput = () => {
  return (
    <View className="flex-row items-center bg-slate-200 px-3 space-x-3 rounded-sm">
      <FontAwesome name="search" size={22} color="gray" />
      <TextInput className="h-8 w-40 " />
    </View>
  );
};

export default SearchInput;
