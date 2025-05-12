import { Button, Text, View } from "react-native";
import React, { useContext } from 'react';
import { useRouter } from "expo-router";
import { AuthContext } from "@/utils/authContext";

const Settings = () => {
    const router = useRouter();
    const authState = useContext(AuthContext);

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Button
                title="Log out"
                onPress={() => {
                    authState.logOut();
                    router.replace("/login");
                }}
            />
        </View>
    )
}

export default Settings;