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
import Checkbox from "expo-checkbox"

const Signup = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    agreeTerms: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const language = useSelector((state) => state.user.language)
  const dispatch = useDispatch()

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSignup = async () => {
    // Basic validation
    if (!formData.fullname || !formData.email || !formData.password) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }

    if (!formData.agreeTerms) {
      Alert.alert("Error", "Please agree to the terms and conditions")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock successful signup
      const userData = {
        id: "123",
        email: formData.email,
        fullname: formData.fullname,
      }

      // Store user data
      await AsyncStorage.setItem("stake-user", JSON.stringify(userData))

      // Update Redux state
      dispatch(login(userData))
    } catch (error) {
      Alert.alert("Signup Failed", error.message || "Something went wrong")
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

          <Text style={styles.title}>{language.data.signup.welcome}</Text>
          <Text style={styles.subtitle}>{language.data.signup.p}</Text>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{language.data.signup.fullname}</Text>
              <TextInput
                style={styles.input}
                placeholder={language.data.signup.fullnameP}
                value={formData.fullname}
                onChangeText={(value) => handleChange("fullname", value)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>{language.data.signup.email}</Text>
              <TextInput
                style={styles.input}
                placeholder={language.data.signup.emailP}
                value={formData.email}
                onChangeText={(value) => handleChange("email", value)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>{language.data.signup.password}</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder={language.data.signup.passwordP}
                  value={formData.password}
                  onChangeText={(value) => handleChange("password", value)}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#64748b" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox
                value={formData.agreeTerms}
                onValueChange={(value) => handleChange("agreeTerms", value)}
                color={formData.agreeTerms ? "#0a1930" : undefined}
                style={styles.checkbox}
              />
              <View style={styles.termsTextContainer}>
                <Text style={styles.termsText}>
                  I agree to the <Text style={styles.termsLink}>terms of service</Text> and{" "}
                  <Text style={styles.termsLink}>privacy policy</Text>
                </Text>
              </View>
            </View>

            <Button
              title={language.data.signup.signup}
              onPress={handleSignup}
              loading={isLoading}
              disabled={!formData.agreeTerms}
              style={styles.signupButton}
            />
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>{language.data.signup.account} </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginLink}>{language.data.signup.login}</Text>
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  checkbox: {
    marginTop: 2,
  },
  termsTextContainer: {
    flex: 1,
  },
  termsText: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
  },
  termsLink: {
    color: "#0a1930",
  },
  signupButton: {
    marginTop: 10,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  loginText: {
    fontSize: 16,
    color: "#64748b",
  },
  loginLink: {
    fontSize: 16,
    color: "#0a1930",
    fontWeight: "500",
  },
})

export default Signup
