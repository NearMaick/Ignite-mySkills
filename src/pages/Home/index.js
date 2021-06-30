import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';
import { styles } from './styles';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Maick</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {mySkills.map(skill => (
        <SkillCard key={skill} skill={skill} />
      ))}
    </SafeAreaView>
  );
}
