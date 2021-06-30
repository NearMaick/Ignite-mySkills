import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export function Button() {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
      // onPress={handleAddNewSkill}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}
