import { Stack } from "expo-router";

export default function rootLayout() {
    return(
        <Stack>
            <Stack.Screen name="index"/>
        </Stack>
    )
}