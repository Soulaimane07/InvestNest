import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import Header from "../../components/Header"
import DashboardCard from "../../components/DashboardCard"
import PropertyCard from "../../components/PropertyCard"

const Dashboard = ({ navigation }) => {
  const language = useSelector((state) => state.user.language)
  const user = useSelector((state) => state.user.user)
  const properties = useSelector((state) => state.properties.list)
  const wallet = useSelector((state) => state.wallet.data)

  return (
    <SafeAreaView style={styles.container}>
      <Header title={language.data.dashboard.title} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>
            {language.data.dashboard.welcome}, {user?.fullname?.split(" ")[0] || "User"}
          </Text>
          <Text style={styles.welcomeSubtitle}>{language.data.dashboard.p}</Text>
        </View>

        <View style={styles.walletCards}>
          <DashboardCard
            title={language.data.dashboard.balance}
            amount={wallet?.balance || 0}
            icon="account-balance-wallet"
          />
          <DashboardCard
            title={language.data.dashboard.income}
            amount={wallet?.monthlyIncome || 0}
            icon="payments"
            color="#10b981"
          />
          <DashboardCard
            title={language.data.dashboard.rental}
            amount={wallet?.totalReturns || 0}
            icon="trending-up"
            color="#0ea5e9"
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{language.data.dashboard.title2}</Text>
          <Text style={styles.sectionSubtitle}>{language.data.dashboard.title2sub}</Text>
        </View>

        <View style={styles.propertiesContainer}>
          {properties.slice(0, 2).map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onPress={() => navigation.navigate("PropertyDetails", { propertyId: property.id })}
            />
          ))}

          <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate("PropertiesTab")}>
            <Text style={styles.viewAllButtonText}>{language.data.dashboard.button}</Text>
            <Ionicons name="arrow-forward" size={16} color="#0a1930" />
          </TouchableOpacity>
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
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a1930",
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#64748b",
  },
  walletCards: {
    marginBottom: 24,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0a1930",
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#64748b",
  },
  propertiesContainer: {
    marginBottom: 24,
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    marginTop: 12,
  },
  viewAllButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0a1930",
    marginRight: 8,
  },
})

export default Dashboard
