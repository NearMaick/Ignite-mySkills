import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, FlatList } from 'react-native';
import { styles } from './styles';

import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills(oldState => [...oldState, data]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    // const currentHour = 19;

    currentHour < 12
      ? setGretting('Good morning')
      : currentHour >= 12 && currentHour < 19
      ? setGretting('Good afternoon')
      : setGretting('Good night');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Maick</Text>
      <Text style={styles.gretting}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        // onChangeText={text => setNewSkill(text)}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SkillCard skill={item.name} />}
      />
    </SafeAreaView>
  );
}
