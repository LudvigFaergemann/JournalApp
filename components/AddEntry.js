import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Keyboard,
} from "react-native";
import DatePicker from "@react-native-community/datetimepicker";
import Slider from "@react-native-community/slider";

function AddEntry() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [mood, setMood] = useState(3);
  const [text, setText] = useState("");

  const handleSaveEntry = () => {
    const newEntry = {
      date: selectedDate,
      mood,
      text,
    };
    // Clear the input fields
    setSelectedDate(new Date());
    setMood(3);
    setText("");
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Use ScrollView with flex: 1 to enable scrolling */}
      <View style={{ flex: 1, padding: 10}}>
        <Text>Date:</Text>
        <DatePicker
          value={selectedDate}
          mode="date"
          onChange={(event, newDate) => setSelectedDate(newDate)}
        />

        <Text>Mood: {mood}</Text>
        <Slider
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={mood}
          onValueChange={(value) => setMood(value)}
        />

        <Text>Journal Entry:</Text>
        <TextInput
          multiline
          value={text}
          onChangeText={(value) => setText(value)}
          placeholder="Write your journal entry here..."
          style={{ height: 200 }} // Adjust the height as needed
        />

        <Button title="Save Entry" onPress={handleSaveEntry} />
      </View>
    </ScrollView>
  );
}

export default AddEntry;
