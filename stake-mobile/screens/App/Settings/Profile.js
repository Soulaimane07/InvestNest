"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Alert } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { login } from "../../../redux/slices/userSlice"
import Header from "../../../components/Header"
import Button from "../../../components/Button"

const Profile = () => {
  const user = useSelector((state) => state.user.user)
  const language = useSelector((state) => state.user.language)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = async () => {
    if (!formData.fullname || !formData.email) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const updatedUser = {
        ...user,
        fullname: formData.fullname,
        email: formData.email,
      }

      // Update AsyncStorage
      await AsyncStorage.setItem("stake-user", JSON.stringify(updatedUser))

      // Update Redux
      dispatch(login(updatedUser))

      Alert.alert("Success", "Profile updated successfully")
    } catch (error) {
      Alert.alert("Error", "Failed to update profile")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={language.data.settings.profile} showBack={true} showProfile={false} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>{language.data.settings.informations}</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{language.data.settings.fullname}</Text>
            <TextInput
              style={styles.input}
              value={formData.fullname}
              onChangeText={(value) => handleChange("fullname", value)}
              placeholder="John Doe"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{language.data.settings.email}</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(value) => handleChange("email", value)}
              placeholder="john@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Button
            title={language.data.settings.save}
            onPress={handleSave}
            loading={isLoading}
            style={styles.saveButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollContainer: {
    padding: 16,
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0a1930",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  saveButton: {
    marginTop: 10,
  },
})

export default Profile
