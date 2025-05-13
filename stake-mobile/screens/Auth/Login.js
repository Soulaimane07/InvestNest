"use client"

import { useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useDispatch, useSelector } from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { login } from "../../redux/slices/userSlice"
import Button from "../../components/Button"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const language = useSelector((state) => state.user.language)
  const dispatch = useDispatch()

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful login
      const userData = {
        id: "123",
        email: email,
        fullname: "John Doe",
      }

      // Store user data
      await AsyncStorage.setItem("stake-user", JSON.stringify(userData))

      // Update Redux state
      dispatch(login(userData))
    } catch (error) {
      Alert.alert("Login Failed", error.message || "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoidingView}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#0a1930" />
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Text style={styles.logo}>Onid</Text>
          </View>

          <Text style={styles.title}>{language.data.login.welcome}</Text>
          <Text style={styles.subtitle}>{language.data.login.p}</Text>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{language.data.login.email}</Text>
              <TextInput
                style={styles.input}
                placeholder={language.data.login.emailP}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.passwordLabelContainer}>
                <Text style={styles.label}>{language.data.login.password}</Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder={language.data.login.passwordP}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#64748b" />
                </TouchableOpacity>
              </View>
            </View>

            <Button
              title={language.data.login.login}
              onPress={handleLogin}
              loading={isLoading}
              style={styles.loginButton}
            />
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>{language.data.login.account} </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signupLink}>{language.data.login.signup}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 20,
    width: 40,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a1930",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a1930",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 30,
  },
  formContainer: {
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0a1930",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  passwordLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#0a1930",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  loginButton: {
    marginTop: 10,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  signupText: {
    fontSize: 16,
    color: "#64748b",
  },
  signupLink: {
    fontSize: 16,
    color: "#0a1930",
    fontWeight: "500",
  },
})

export default Login
