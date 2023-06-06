import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

function App() {
  const [enteredGoalText, setGoalText] = useState('');
  const [goals, setGoals] = useState<string[]>([]);

  function goalInputHandler(enteredText: string) {
    setGoalText(enteredText);
  }
  function addInputHandler() {
    setGoals(prev => [...prev, enteredGoalText]);
  }
  console.warn(goals);

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addInputHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal, i) => (
          <Text key={i}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
  },
  goalsContainer: {
    flex: 3,
  },
});

export default App;
