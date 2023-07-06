import { View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";

import SearchInput from "../components/SearchInput";

const Header = () => {
  return (
    <View className="w-full h-16 bg-gray-900 items-center px-5 flex-row justify-between">
      <Image
        source={{
          uri: "https://www.vlr.gg/img/vlr/logo_header.png",
        }}
        className="h-10 w-10"
      />
      <SearchInput />
      <TouchableOpacity className="h-14 items-center justify-center">
        <Entypo name="menu" size={40} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
