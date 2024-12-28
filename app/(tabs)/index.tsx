import PokemonCard from "@/components/PokemonCard";
import { PokemonData } from "@/lib/Interfaces/Pokemon";
import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";

export default function index() {
  const charmanderdata: PokemonData = {
    id: 0,
    name: "Charmander",
    image: require("@/assets/images/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Ember", "Growl", "Leer", "Scratch"],
    weakness: ["Water", "Rock"],
  }

  const bulbasaurdata: PokemonData = {
    id: 1,
    name: "Bulbasaur",
    image: require("@/assets/images/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Growl", "Leech Seed", "Vine Whip"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  }

  const pikachuData: PokemonData = {
    id: 2,
    name: "Pikachu",
    image: require("@/assets/images/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Thunder Shock", "Growl", "Tail Whip", "Thunder Wave"],
    weakness: ["Ground"],
  }

  const squirtleData: PokemonData = {
    id: 3,
    name: "Squirtle",
    image: require("@/assets/images/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard key={charmanderdata.id} {...charmanderdata} />
        <PokemonCard key={squirtleData.id} {...squirtleData} />
        <PokemonCard key={bulbasaurdata.id} {...bulbasaurdata} />
        <PokemonCard key={pikachuData.id} {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});