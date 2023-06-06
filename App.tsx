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

interface Goals {
  text: string;
  id: string;
}

function App() {
  const [goals, setGoals] = useState<Goals[]>([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setGoals={setGoals} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          alwaysBounceVertical={false}
        />
      </View>
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
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
  },
  goalText: {
    color: 'white',
  },
});
