import PokemonCard from "@/components/PokemonCard";
import { PokemonData } from "@/lib/Interfaces/Pokemon";
import { StyleSheet, SafeAreaView, Platform } from "react-native";

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
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard key={charmanderdata.id} {...charmanderdata} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
})