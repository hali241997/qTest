import { StyleSheet } from "react-native";

const Card = StyleSheet.create({
    cardStyle: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
    },
    cardTextStyle: {
        color: '#FF3301',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Card