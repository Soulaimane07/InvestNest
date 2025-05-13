import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch, useSelector } from "react-redux"
import { logout, langChange } from "../../redux/slices/userSlice"
import Header from "../../components/Header"

const Settings = ({ navigation }) => {
  const dispatch = useDispatch()
  const language = useSelector((state) => state.user.language)

  const handleLogout = async () => {
    await AsyncStorage.removeItem("stake-user")
    dispatch(logout())
  }

  const handleLanguageChange = () => {
    dispatch(langChange())
  }

  const settingsOptions = [
    {
      title: "Account",
      items: [
        {
          icon: <Feather name="user" size={22} color="#64748b" />,
          label: language.data.settings.profile,
          onPress: () => navigation.navigate("Profile"),
        },
        {
          icon: <Feather name="lock" size={22} color="#64748b" />,
          label: language.data.settings.password,
          onPress: () => navigation.navigate("Password"),
        },
        {
          icon: <Feather name="credit-card" size={22} color="#64748b" />,
          label: language.data.settings.plans,
          onPress: () => navigation.navigate("Plans"),
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          icon: <Ionicons name="notifications-outline" size={22} color="#64748b" />,
          label: "Notifications",
          onPress: () => {},
        },
        {
          icon: <Ionicons name="language-outline" size={22} color="#64748b" />,
          label: "Language",
          rightElement: (
            <TouchableOpacity style={styles.languageSwitch} onPress={handleLanguageChange}>
              <Text style={styles.languageText}>{language.subTitle === "en" ? "EN" : "FR"}</Text>
            </TouchableOpacity>
          ),
          onPress: handleLanguageChange,
        },
        {
          icon: <MaterialIcons name="payment" size={22} color="#64748b" />,
          label: "Payment Methods",
          onPress: () => {},
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          icon: <Feather name="help-circle" size={22} color="#64748b" />,
          label: "Help & Support",
          onPress: () => {},
        },
        {
          icon: <Feather name="info" size={22} color="#64748b" />,
          label: "About",
          onPress: () => {},
        },
        {
          icon: <Feather name="log-out" size={22} color="#ef4444" />,
          label: language.data.sidebar.logout,
          labelColor: "#ef4444",
          onPress: handleLogout,
        },
      ],
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header title={language.data.sidebar.settings} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {settingsOptions.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>

            <View style={styles.optionsContainer}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity key={itemIndex} style={styles.optionItem} onPress={item.onPress}>
                  <View style={styles.optionIconContainer}>{item.icon}</View>
                  <Text style={[styles.optionLabel, item.labelColor && { color: item.labelColor }]}>{item.label}</Text>
                  {item.rightElement ? item.rightElement : <Feather name="chevron-right" size={20} color="#94a3b8" />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0a1930",
    marginBottom: 12,
    paddingLeft: 4,
  },
  optionsContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  optionIconContainer: {
    width: 40,
    alignItems: "center",
    marginRight: 12,
  },
  optionLabel: {
    flex: 1,
    fontSize: 16,
    color: "#0a1930",
  },
  languageSwitch: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  languageText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0a1930",
  },
  versionContainer: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 40,
  },
  versionText: {
    fontSize: 14,
    color: "#94a3b8",
  },
})

export default Settings
