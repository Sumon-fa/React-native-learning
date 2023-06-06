import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Goals} from '../App';

interface GoalItemProps {
  goals: Goals[];
}

const GoalItem = ({goals}: GoalItemProps) => {
  return (
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
    padding: 8,
  },
  goalText: {
    color: 'white',
  },
});
