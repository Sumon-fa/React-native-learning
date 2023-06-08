import React from 'react';
import {View, FlatList, Text, StyleSheet, Pressable} from 'react-native';
import {Goals} from '../App';

interface GoalItemProps {
  goals: Goals[];
  setGoals: React.Dispatch<React.SetStateAction<Goals[]>>;
}

const GoalItem = ({goals, setGoals}: GoalItemProps) => {
  function removeHandler(id: string) {
    setGoals(prevItem => {
      return prevItem.filter(item => {
        return item.id !== id;
      });
    });
  }

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={itemData => {
          return (
            <View style={styles.goalItem}>
              <Pressable
                android_ripple={{color: '#dddddd'}}
                onPress={() => removeHandler(itemData.item.id)}
                style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </Pressable>
            </View>
          );
        }}
        keyExtractor={item => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 3,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
