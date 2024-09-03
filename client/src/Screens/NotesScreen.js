import React, { useContext } from "react";
import {
  FlatList,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from "react-native";
import tw from "twrnc";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  AntDesign,
} from "@expo/vector-icons";
import { FlashCardsContext } from "../config/FlashCardsContext";

const NotesScreen = ({ navigation }) => {
  // Data for FlatList
  const data = [
    {
      id: "1",
      name: "Summary",
      description: "Get beautiful summaries of your notes",
      icon: "notes",
      iconType: "MaterialIcons",
      screen: "AllResourcesScreen",
      iconColour: "blue",
      iconBgColour: "blue",
    },
    {
      id: "2",
      name: "Flashcards",
      description: "Review your flashcards",
      icon: "newspaper-variant-multiple-outline",
      iconType: "MaterialCommunityIcons",
      screen: "AllResourcesScreen",
      iconColour: "red",
      iconBgColour: "yellow",
    },
    {
      id: "3",
      name: "Quiz",
      description: "Test your knowledge with quizzes",
      icon: "brain",
      iconType: "MaterialCommunityIcons",
      screen: "AllResourcesScreen",
      iconColour: "green",
      iconBgColour: "green",
    },
    {
      id: "4",
      name: "Co-Pilot",
      description: "AI-powered assistant to help you",
      icon: "robot-outline",
      iconType: "MaterialCommunityIcons",
      screen: "CoPilot",
      iconColour: "red",
      iconBgColour: "yellow",
    },
  ];

  //Touchable item to render
  const renderItem = ({ item }) => {
    const IconComponent =
      item.iconType === "MaterialIcons"
        ? MaterialIcons
        : MaterialCommunityIcons;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(item.screen, { location: item.name })
        }
        style={tw`mx-2 my-2 w-9/20 p-9 bg-white gap-y-2 flex text-center justify-center items-center border border-gray-300 rounded-xl`}
      >
        <View style={tw`p-2 bg-${item.iconBgColour}-100 rounded-xl`}>
          <IconComponent name={item.icon} size={24} color={item.iconColour} />
        </View>
        <Text style={tw`text-center font-semibold text-md`}>{item.name}</Text>
        <Text style={tw`text-center font-medium text-xs text-gray-500`}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );
  };
  //--------------------------------------------------------------------------------------

  return (
    <>
      <View style={tw`flex-1 mt-12 `}>
        <View
          style={tw`flex flex-row items-center justify-between border-b border-gray-200  py-5 px-5`}
        >
          <View style={tw` flex flex-row gap-x-2 items-center `}>
            <Text style={tw`text-3xl text-left font-extrabold`}>Resources</Text>
          </View>
        </View>

        <ScrollView style={tw`bg-gray-100`}>
          <View style={tw`flex-1 flex-col px-5 gap-y-8 `}>
            <Text
              style={tw` mt-6 text-center text-gray-500 text-md  font-light`}
            >
              View your summarised notes and flashcards below. Study smarter
              today.
            </Text>

            {/* FlatList Approach, a lot cleaner */}
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default NotesScreen;
