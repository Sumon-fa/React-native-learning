import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {Goals} from '../App';

interface GoalInputProps {
  setGoals: React.Dispatch<React.SetStateAction<Goals[]>>;
}

const GoalInput = ({setGoals}: GoalInputProps) => {
  const [enteredGoalText, setGoalText] = useState('');

  function addInputHandler() {
    setGoals(prev => [
      ...prev,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goals"
        onChangeText={text => setGoalText(text)}
      />
      <Button title="Add Goal" onPress={addInputHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
