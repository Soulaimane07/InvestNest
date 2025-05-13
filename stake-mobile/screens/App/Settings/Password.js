"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import Header from "../../../components/Header"
import Button from "../../../components/Button"

const Password = () => {
  const language = useSelector((state) => state.user.language)

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleSave = async () => {
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      Alert.alert("Error", "Please fill in all fields")
      return
    }

    if (formData.newPassword !== formData.confirmPassword) {
      Alert.alert("Error", "New password and confirm password do not match")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      Alert.alert("Success", "Password updated successfully")

      // Reset form
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    } catch (error) {
      Alert.alert("Error", "Failed to update password")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={language.data.settings.password} showBack={true} showProfile={false} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>{language.data.settings.reset}</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{language.data.settings.current}</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                value={formData.currentPassword}
                onChangeText={(value) => handleChange("currentPassword", value)}
                secureTextEntry={!showPasswords.current}
                placeholder="••••••••"
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => togglePasswordVisibility("current")}>
                <Ionicons name={showPasswords.current ? "eye-off" : "eye"} size={24} color="#64748b" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{language.data.settings.new}</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                value={formData.newPassword}
                onChangeText={(value) => handleChange("newPassword", value)}
                secureTextEntry={!showPasswords.new}
                placeholder="••••••••"
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => togglePasswordVisibility("new")}>
                <Ionicons name={showPasswords.new ? "eye-off" : "eye"} size={24} color="#64748b" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{language.data.settings.confirm}</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                value={formData.confirmPassword}
                onChangeText={(value) => handleChange("confirmPassword", value)}
                secureTextEntry={!showPasswords.confirm}
                placeholder="••••••••"
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => togglePasswordVisibility("confirm")}>
                <Ionicons name={showPasswords.confirm ? "eye-off" : "eye"} size={24} color="#64748b" />
              </TouchableOpacity>
            </View>
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
  saveButton: {
    marginTop: 10,
  },
})

export default Password
