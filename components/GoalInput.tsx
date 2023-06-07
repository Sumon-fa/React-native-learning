import React, {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';
import {Goals} from '../App';

interface GoalInputProps {
  setGoals: React.Dispatch<React.SetStateAction<Goals[]>>;
  visible: boolean;
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoalInput = ({setGoals, visible, setModalIsVisible}: GoalInputProps) => {
  const [enteredGoalText, setGoalText] = useState('');

  function goalHandler() {
    setModalIsVisible(false);
  }

  function addInputHandler() {
    setGoals(prev => [
      ...prev,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    setGoalText('');
    setModalIsVisible(false);
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals"
          onChangeText={text => setGoalText(text)}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addInputHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={goalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
