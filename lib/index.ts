export const getTypeBagde = (type: string) => {
    switch (type.toLowerCase()) {
        case 'electric':
            return {
                borderColor: "#ffd700",
                emoji: "⚡"
            };
        case 'fire':
            return {
                borderColor: "#ff5733",
                emoji: "🔥"
            };
        case 'water':
            return {
                borderColor: "#6493ea",
                emoji: "💧"
            };
        case 'grass':
            return {
                borderColor: "#66cc66",
                emoji: "🌿"
            };
        default: 
            return {
                borderColor: "#a0a0a0a",
                emoji: "❓"
            };
    }
}