import { PokemonData } from "@/lib/Interfaces/Pokemon";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

export default function PokemonCard({ hp, id, image, moves, name, type, weakness }: PokemonData) {
    return (
        <View style={styles.card}>
            <View>
                <Text>{name}</Text>
                <Text>{hp}</Text>
            </View>

            <Image source={image} accessibilityLabel={`${name} Pokemon`} />

            <View>
                <Text>{type}</Text>
            </View>
            <View>
                <Text>{moves.join(", ")}</Text>
            </View>
            <View>
                <Text>{weakness.join(", ")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowColor: "#333",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android: {
                elevation: 5
            }
        })
    }
});