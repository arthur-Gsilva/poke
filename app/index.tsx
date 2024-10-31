import { Text, View, StyleSheet } from "react-native";
import { PokeArea } from "../components/PokeArea";

export default function screen(){
    return(
        <View style={styles.container}>
            <View>
                <PokeArea id={3}/>
                <PokeArea id={20}/>
                <PokeArea id={6}/>
                <PokeArea id={90}/>
                <PokeArea id={465}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});