// Home.js
import React from "react";
import { View, Text} from "react-native";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 10, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1 }}>
        <Text>Dagens citat:</Text>
        {/* Add header content here */}
      </View>
      <View style={{ flex: 4 }}>
        <Text>Aktuelle streak 🔥:</Text>
        {/* Add main content here */}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
      </View>
    </View>
  );
}

export default Home;
