import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MatchCard = ({
  logoOne,
  logoTwo,
  teamOne,
  teamTwo,
  scoreOne,
  scoreTwo,
}) => {
  return (
    <TouchableOpacity className="h-28 w-44 border border-black shadow-lg justify-center items-center ml-2 my-2 bg-gray-300 rounded-sm">
      <View className="space-y-2">
        <View className="flex-row h-11 w-40 mx-1 px-4 border border-gray items-center justify-between bg-zinc-300 shadow-sm rounded-sm">
          <View className="flex-row space-x-2 justify-center items-center">
            <Image source={{ uri: `${logoOne}` }} className="h-4 w-4" />
            <Text className="text-md font-bold">{teamOne}</Text>
          </View>
          <Text className="text-lg font-bold">{scoreOne}</Text>
        </View>
        <View className="flex-row h-11 w-40 mx-1 px-4 border border-gray items-center justify-between bg-zinc-300 shadow-sm rounded-sm">
          <View className="flex-row space-x-2 justify-center items-center">
            <Image source={{ uri: `${logoTwo}` }} className="h-4 w-4" />
            <Text className="text-md font-bold">{teamTwo}</Text>
          </View>
          <Text className="text-lg font-bold">{scoreTwo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;
