import { getTypeBagde } from "@/lib";
import { PokemonData } from "@/lib/Interfaces/Pokemon";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

export default function PokemonCard({ hp, image, moves, name, type, weakness }: PokemonData) {

    const { borderColor, emoji } = getTypeBagde(type);

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>💗{hp}</Text>
            </View>

            <Image resizeMode="contain" style={styles.image} source={image} accessibilityLabel={`${name} Pokemon`} />

            <View style={styles.typeContainer}>
                <View style={[styles.bagde, { borderColor }]}>
                    <Text style={styles.emoji} >{emoji}</Text>
                    <Text style={styles.text} >{type}</Text>
                </View>
            </View>

            <View style={styles.moves}>
                <Text style={styles.movesText}>{moves.join(", ")}</Text>
            </View>
            <View style={styles.weakness}>
                <Text style={styles.weaknessText}>{weakness.join(", ")}</Text>
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
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: "100%",
        height: 200,
        marginBlock: 16,
    },
    typeContainer: {
        marginBottom: 40,
        alignItems: "center",
    },
    bagde: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 4
    },
    emoji: {
        fontSize: 30,
        marginRight: 12,
    },
    text: {
        fontSize: 22,
        fontWeight: "bold"
    },
    moves: {
        marginBottom: 16
    },
    movesText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    weakness: {
        marginBottom: 8
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: "bold",
    }
});