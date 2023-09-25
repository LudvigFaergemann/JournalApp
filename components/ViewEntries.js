import React from "react";
import { View, Text } from "react-native";

function ViewEntries() {
  // retrieve and display journal entries here
  // right now just displaying a placeholder message
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Your Journal Entries Go Here</Text>
    </View>
  );
}

export default ViewEntries;
