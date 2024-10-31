import { useEffect, useState } from "react"
import { Image, Text, View } from "react-native"

type Props = {
    id: number
}

export const PokeArea = ({id}: Props) => {

    const [poke, setPoke] = useState<any>()

    const getPokemon = async () => {
        const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const json = await req.json()
        console.log(json.sprites.front_default)
        setPoke(json)
    }


    useEffect(() => {
        getPokemon()
    }, [])

    return(
        <View>
            <Image source={{ uri: poke.sprites.front_default }} style={{height: 50, width: 50}}/>
            <Text>{poke.name}</Text>
        </View>
    )
}