import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TextInput } from "react-native";
import { Button } from "../../components/Button";
import { SkillCard } from "../../components/SkillCard";
import { styles } from "./styles";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState("");

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkills((oldState) => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldState) => oldState.filter((skill) => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    // const currentHour = 19;

    currentHour < 12
      ? setGreeting("Good morning")
      : currentHour >= 12 && currentHour < 19
      ? setGreeting("Good afternoon")
      : setGreeting("Good night");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} testID='welcome'>
        Welcome, Maick
      </Text>
      <Text style={styles.gretting}>{greeting}</Text>

      <TextInput
        testID='input-new'
        style={styles.input}
        placeholder='New Skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
        // onChangeText={text => setNewSkill(text)}
      />

      <Button testID='button-add' title='Add' onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      {mySkills && (
        <FlatList
          testID='flat-list-skills'
          data={mySkills}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps='never'
          renderItem={({ item }) => (
            <SkillCard
              skill={item.name}
              onPress={() => {
                handleRemoveSkill(item.id);
              }}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}
