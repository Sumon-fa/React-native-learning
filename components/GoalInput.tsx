import React, {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';
import {Goals} from '../App';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

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
    setGoals(prev => [...prev, {text: enteredGoalText, id: uuidv4()}]);
    setGoalText('');
    setModalIsVisible(false);
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goals"
          onChangeText={text => setGoalText(text)}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addInputHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={goalHandler} color="#f31282" />
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
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '100%',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
