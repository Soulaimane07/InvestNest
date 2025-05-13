import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import DashboardCard from "../../components/DashboardCard"
import PropertyCard from "../../components/PropertyCard"
import Header from "../../components/Header"

const Home = ({ navigation }) => {
  // Mock data
  const dashboardData = [
    { id: 1, title: "Total Invested", amount: "25,000" },
    { id: 2, title: "Total Returns", amount: "3,250" },
    { id: 3, title: "Monthly Income", amount: "450" },
  ]

  const properties = [
    {
      id: 1,
      title: "2 Bed Studio One Tower",
      location: "Dubai",
      price: 1234000,
      totalInvestors: 45,
      listImages: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
    },
    {
      id: 2,
      title: "Boulevard Point Downtown",
      location: "Dubai",
      price: 2450000,
      totalInvestors: 78,
      listImages: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      ],
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header pageTitle="Dashboard" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.dashboardCardsContainer}>
          {dashboardData.map((item) => (
            <View key={item.id} style={styles.cardWrapper}>
              <DashboardCard data={item} />
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Properties</Text>
          <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate("PropertiesTab")}>
            <Text style={styles.viewAllText}>View All</Text>
            <Ionicons name="chevron-forward" size={16} color="#0d9488" />
          </TouchableOpacity>
        </View>

        <View style={styles.propertiesContainer}>
          {properties.map((property) => (
            <View key={property.id} style={styles.propertyCardWrapper}>
              <PropertyCard
                data={property}
                onPress={() => navigation.navigate("Property", { propertyId: property.id })}
              />
            </View>
          ))}
        </View>

        <View style={styles.investmentSummaryContainer}>
          <Text style={styles.sectionTitle}>Investment Summary</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Portfolio Value</Text>
              <Text style={styles.summaryValue}>$28,250</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Properties</Text>
              <Text style={styles.summaryValue}>3</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Annual Return</Text>
              <Text style={[styles.summaryValue, styles.returnValue]}>+10.4%</Text>
            </View>
          </View>
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
  dashboardCardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -8,
  },
  cardWrapper: {
    width: "50%",
    padding: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f172a",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewAllText: {
    fontSize: 14,
    color: "#0d9488",
    marginRight: 4,
  },
  propertiesContainer: {
    marginBottom: 24,
  },
  propertyCardWrapper: {
    marginBottom: 16,
  },
  investmentSummaryContainer: {
    marginBottom: 24,
  },
  summaryCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  summaryLabel: {
    fontSize: 16,
    color: "#64748b",
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
  },
  returnValue: {
    color: "#10b981",
  },
})

export default Home
