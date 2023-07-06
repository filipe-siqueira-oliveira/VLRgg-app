import { SafeAreaView, ScrollView, Text, Image } from "react-native";

import Header from "../components/Header";

import React from "react";
import MatchCard from "../components/MatchCard";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-zinc-300">
      <Header />
      <ScrollView>
        <Text className="text-md mx-4 mt-4 font-bold">
          Partidas em andamento
        </Text>
        <ScrollView horizontal>
          <MatchCard
            logoOne="https://owcdn.net/img/62bbec8dc1b9f.png"
            logoTwo="https://owcdn.net/img/62a4157412b4f.png"
            scoreOne="13"
            scoreTwo="4"
            teamOne="LOUD"
            teamTwo="ACEND "
          />
          <MatchCard
            logoOne="https://owcdn.net/img/62a40cc2b5e29.png"
            logoTwo="https://owcdn.net/img/640c38262824c.png"
            scoreOne="8"
            scoreTwo="4"
            teamOne="FNATIC"
            teamTwo="TL "
          />
          <MatchCard
            logoOne="https://owcdn.net/img/64300279396c3.png"
            logoTwo="https://owcdn.net/img/60d222f5b1abc.png"
            scoreOne="9"
            scoreTwo="4"
            teamOne="00"
            teamTwo="ODDIK "
          />
          <MatchCard
            logoOne="https://owcdn.net/img/62df64ca2c2a9.png"
            logoTwo="https://owcdn.net/img/62d4e3b70086d.png"
            scoreOne="8"
            scoreTwo="7"
            teamOne="CAOS"
            teamTwo="The Union "
          />
          <MatchCard
            logoOne="https://owcdn.net/img/5feab33100c1d.png"
            logoTwo="https://owcdn.net/img/62fe0b8f6b084.png"
            scoreOne="12"
            scoreTwo="2"
            teamOne="FPX"
            teamTwo="T1 "
          />
        </ScrollView>
        <Text className="text-md mx-4 mt-4 font-bold">Resultados recentes</Text>
        <ScrollView horizontal>
          <MatchCard
            logoOne="https://owcdn.net/img/63d91e60a84bc.png"
            logoTwo="https://owcdn.net/img/61732742e090a.png"
            scoreOne="13"
            scoreTwo="8"
            teamOne="M80"
            teamTwo="Oxygen "
          />
          <MatchCard
            logoOne="https://owcdn.net/img/627934cd0b505.png"
            logoTwo="https://owcdn.net/img/628ccb7095263.png"
            scoreOne="14"
            scoreTwo="12"
            teamOne="FOKUS"
            teamTwo="S2G"
          />
          <MatchCard
            logoOne="https://owcdn.net/img/62a410a4e7b4f.png"
            logoTwo="https://owcdn.net/img/632be843b7d51.png"
            scoreOne="5"
            scoreTwo="13"
            teamOne="NAVI"
            teamTwo="FURIA "
          />
          <MatchCard
            logoOne="https://owcdn.net/img/649d272e6ef32.png"
            logoTwo="https://owcdn.net/img/628addcbd509e.png"
            scoreOne="9"
            scoreTwo="13"
            teamOne="The Guard"
            teamTwo="Cloud9 "
          />
          <MatchCard
            logoOne="https://owcdn.net/img/61d6654e2018a.png"
            logoTwo="https://owcdn.net/img/626a5cb665a9a.png"
            scoreOne="13"
            scoreTwo="1"
            teamOne="NAOS"
            teamTwo="Fancy "
          />
        </ScrollView>
        <Image
          source={{ uri: "https://owcdn.net/img/64a48585a8eec.jpg" }}
          className="h-48 mx-2 mt-4"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
