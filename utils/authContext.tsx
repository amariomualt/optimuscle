import { SplashScreen, useRouter } from "expo-router";
import { createContext, PropsWithChildren, use, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "expo-router/build/global-state/router-store";

SplashScreen.preventAutoHideAsync();

type AuthState = {
    isLoggedIn: boolean,
    isReady: boolean,
    logIn: () => void;
    logOut: () => void;
}

export const AuthContext = createContext<AuthState>({
    isLoggedIn: false,
    isReady: false,
    logIn: () => {},
    logOut: () => {}
});

const authStorageKey = "auth-key";

export function AuthProvider({ children }: PropsWithChildren) {
    const [isReady, setIsReady] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    const storeAuthState = async (newState: {isLoggedIn: boolean}) => {
        try {
            const jsonValue = JSON.stringify(newState);
            await AsyncStorage.setItem(authStorageKey, jsonValue);
        } catch (error) {
            console.log("Error saving", error);
        }
    };

    const logIn = () => {
        setIsLoggedIn(true);
        storeAuthState({ isLoggedIn: true });
        router.replace("/");
    }
    const logOut = () => {
        setIsLoggedIn(false);
        storeAuthState({ isLoggedIn: false });
        router.replace("/");
    }

    useEffect(() => {
        const getAuthFromStorage = async () => {
        
            await new Promise((res) => setTimeout(() => res(null), 500));
            try {
                const value = await AsyncStorage.getItem(authStorageKey);
                if (value !== null) {
                    const auth = JSON.parse(value);
                    setIsLoggedIn(auth.isLoggedIn);
                }
            } catch (error) {
                console.log("Error fetching from storage", error);
            }
            setIsReady(true);
        }
        getAuthFromStorage();
    }, []);

    useEffect(() => {
        if (isReady) {
            SplashScreen.hideAsync();
        }
    }, [isReady]);

    return (
        <AuthContext.Provider 
            value={{ 
                isReady, 
                isLoggedIn, 
                logIn, 
                logOut 
            }}>

            {children}
        </AuthContext.Provider>
    )
}