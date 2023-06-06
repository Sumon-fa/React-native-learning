import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export interface Goals {
  text: string;
  id: string;
}

function App() {
  const [goals, setGoals] = useState<Goals[]>([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setGoals={setGoals} />
      <GoalItem goals={goals} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
});
