import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, View} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export interface Goals {
  text: string;
  id: string;
}

function App() {
  const [goals, setGoals] = useState<Goals[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          setModalIsVisible={setModalIsVisible}
          setGoals={setGoals}
          visible={modalIsVisible}
        />
        <GoalItem goals={goals} setGoals={setGoals} />
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a',
  },
});
