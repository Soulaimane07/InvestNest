"use client"

import { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Provider, useDispatch, useSelector } from "react-redux"
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons"
import { store } from "./redux/store"

// Auth Screens
import Welcome from "./screens/Auth/Welcome"
import Login from "./screens/Auth/Login"
import Signup from "./screens/Auth/Signup"

// App Screens
import Dashboard from "./screens/App/Dashboard"
import Properties from "./screens/App/Properties"
import PropertyDetails from "./screens/App/PropertyDetails"
import SavedProperties from "./screens/App/SavedProperties"
import LikedProperties from "./screens/App/LikedProperties"
import MyDeals from "./screens/App/MyDeals"
import Wallet from "./screens/App/Wallet"
import Settings from "./screens/App/Settings"
import Profile from "./screens/App/Settings/Profile"
import Password from "./screens/App/Settings/Password"
import Plans from "./screens/App/Settings/Plans"

// Redux actions
import { login, logout, setLang } from "./redux/slices/userSlice"
import { fetchProperties, fetchSavedProperties, fetchLikedProperties, fetchDeals } from "./redux/slices/propertiesSlice"
import { fetchWallet } from "./redux/slices/walletSlice"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function AppTabs() {
  const language = useSelector((state) => state.user.language)

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "DashboardTab") {
            return <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
          } else if (route.name === "PropertiesTab") {
            return <MaterialIcons name="apartment" size={size} color={color} />
          } else if (route.name === "WalletTab") {
            return <Ionicons name={focused ? "wallet" : "wallet-outline"} size={size} color={color} />
          } else if (route.name === "DealsTab") {
            return <Feather name="briefcase" size={size} color={color} />
          } else if (route.name === "SettingsTab") {
            return <Feather name="settings" size={size} color={color} />
          }
        },
        tabBarActiveTintColor: "#0a1930",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="DashboardTab" component={Dashboard} options={{ title: language.data.sidebar.dashboard }} />
      <Tab.Screen name="PropertiesTab" component={Properties} options={{ title: language.data.sidebar.properties }} />
      <Tab.Screen name="WalletTab" component={Wallet} options={{ title: language.data.sidebar.myWallet }} />
      <Tab.Screen name="DealsTab" component={MyDeals} options={{ title: language.data.sidebar.myDeals }} />
      <Tab.Screen name="SettingsTab" component={Settings} options={{ title: language.data.sidebar.settings }} />
    </Tab.Navigator>
  )
}

function AppContent() {
  const dispatch = useDispatch()
  const userFromStore = useSelector((state) => state.user.user)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setUser(userFromStore)
  }, [userFromStore])

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("stake-user")
        const lang = await AsyncStorage.getItem("stake-lang")

        if (lang) {
          dispatch(setLang(lang))
        }

        if (userData) {
          const parsedUserData = JSON.parse(userData)
          setUser(parsedUserData)
          dispatch(login(parsedUserData))
          dispatch(fetchWallet(parsedUserData.id))
          dispatch(fetchProperties())
          dispatch(fetchSavedProperties(parsedUserData.id))
          dispatch(fetchLikedProperties(parsedUserData.id))
          dispatch(fetchDeals(parsedUserData.id))
        } else {
          dispatch(logout())
        }
      } catch (error) {
        console.error("Error loading user data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUserData()
  }, [dispatch])

  if (isLoading) {
    return null // Or a loading screen
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Main" component={AppTabs} />
            <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
            <Stack.Screen name="SavedProperties" component={SavedProperties} />
            <Stack.Screen name="LikedProperties" component={LikedProperties} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="Plans" component={Plans} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}
