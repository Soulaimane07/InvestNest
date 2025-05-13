import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import Header from "../../../components/Header"
import Button from "../../../components/Button"

const Plans = () => {
  const language = useSelector((state) => state.user.language)

  const plans = [
    {
      id: 1,
      name: "Basic",
      price: 0,
      features: ["Access to all properties", "Basic analytics", "Email support"],
      current: true,
    },
    {
      id: 2,
      name: "Premium",
      price: 9.99,
      features: ["All Basic features", "Advanced analytics", "Priority access to new properties", "Priority support"],
      current: false,
    },
    {
      id: 3,
      name: "Pro",
      price: 19.99,
      features: [
        "All Premium features",
        "Exclusive properties",
        "Dedicated account manager",
        "Custom investment strategies",
        "Zero transaction fees",
      ],
      current: false,
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header title={language.data.settings.plans} showBack={true} showProfile={false} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>{language.data.settings.CP}</Text>

        {plans.map((plan) => (
          <View key={plan.id} style={[styles.planCard, plan.current && styles.currentPlanCard]}>
            <View style={styles.planHeader}>
              <Text style={styles.planName}>{plan.name}</Text>
              <Text style={styles.planPrice}>
                ${plan.price}
                <Text style={styles.planPeriod}>/month</Text>
              </Text>
            </View>

            <View style={styles.planFeatures}>
              {plan.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            {plan.current ? (
              <View style={styles.currentPlanBadge}>
                <Text style={styles.currentPlanText}>Current Plan</Text>
              </View>
            ) : (
              <Button title="Upgrade" style={styles.upgradeButton} />
            )}
          </View>
        ))}
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
    marginBottom: 20,
  },
  planCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  currentPlanCard: {
    borderWidth: 2,
    borderColor: "#10b981",
  },
  planHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  planName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0a1930",
  },
  planPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0a1930",
  },
  planPeriod: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#64748b",
  },
  planFeatures: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#334155",
  },
  currentPlanBadge: {
    backgroundColor: "#10b981",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  currentPlanText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  upgradeButton: {
    marginTop: 10,
  },
})

export default Plans
