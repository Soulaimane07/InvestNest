import { View, Text, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

const DashboardCard = ({ title, amount, icon, color = "#0a1930" }) => {
  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" }).replace(".00", "")
  }

  return (
    <View style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: `${color}10` }]}>
        <MaterialIcons name={icon} size={24} color={color} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.amount}>{formatCurrency(amount)}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
  },
  amount: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: "#64748b",
  },
})

export default DashboardCard
