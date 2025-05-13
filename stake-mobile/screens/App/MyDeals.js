import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from "react-native"
import { Feather, MaterialIcons } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import Header from "../../components/Header"

const MyDeals = ({ navigation }) => {
  const language = useSelector((state) => state.user.language)
  const deals = useSelector((state) => state.properties.deals)
  const properties = useSelector((state) => state.properties.list)

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" }).replace(".00", "")
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const getPropertyDetails = (propertyId) => {
    return properties.find((p) => p.id === propertyId) || {}
  }

  const renderDealItem = ({ item }) => {
    const property = getPropertyDetails(item.propertyId)

    return (
      <TouchableOpacity
        style={styles.dealCard}
        onPress={() => navigation.navigate("Property", { propertyId: item.propertyId })}
      >
        <View style={styles.dealHeader}>
          <Text style={styles.dealTitle}>{property.title || "Property"}</Text>
          <View style={styles.dealBadge}>
            <Text style={styles.dealBadgeText}>Active</Text>
          </View>
        </View>

        <View style={styles.dealDetails}>
          <View style={styles.dealDetail}>
            <Text style={styles.dealDetailLabel}>{language.data.myDeals.investment}</Text>
            <Text style={styles.dealDetailValue}>{formatCurrency(item.investmentAmount)}</Text>
          </View>

          <View style={styles.dealDetail}>
            <Text style={styles.dealDetailLabel}>{language.data.myDeals.returns}</Text>
            <Text style={styles.dealDetailValue}>{formatCurrency(item.returns)}</Text>
          </View>

          <View style={styles.dealDetail}>
            <Text style={styles.dealDetailLabel}>{language.data.myDeals.date}</Text>
            <Text style={styles.dealDetailValue}>{formatDate(item.investmentDate)}</Text>
          </View>
        </View>

        <View style={styles.dealActions}>
          <TouchableOpacity style={styles.dealActionButton}>
            <MaterialIcons name="add" size={20} color="#0a1930" />
            <Text style={styles.dealActionText}>{language.data.myDeals.add}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dealActionButton}>
            <MaterialIcons name="sell" size={20} color="#0a1930" />
            <Text style={styles.dealActionText}>{language.data.myDeals.sell}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={language.data.myDeals.title} />

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{deals.length}</Text>
          <Text style={styles.statLabel}>{language.data.myDeals.active}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>
            {formatCurrency(deals.reduce((sum, deal) => sum + deal.investmentAmount, 0))}
          </Text>
          <Text style={styles.statLabel}>{language.data.myDeals.total}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>{formatCurrency(deals.reduce((sum, deal) => sum + deal.returns, 0))}</Text>
          <Text style={styles.statLabel}>{language.data.myDeals.earned}</Text>
        </View>
      </View>

      {deals.length > 0 ? (
        <FlatList
          data={deals}
          renderItem={renderDealItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.dealsContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Feather name="briefcase" size={60} color="#94a3b8" />
          <Text style={styles.emptyTitle}>{language.data.myDeals.empty}</Text>
          <Text style={styles.emptySubtitle}>{language.data.myDeals.p}</Text>
          <TouchableOpacity style={styles.browseButton} onPress={() => navigation.navigate("PropertiesTab")}>
            <Text style={styles.browseButtonText}>{language.data.myDeals.button}</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  statsContainer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  statCard: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0a1930",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: "#64748b",
  },
  dealsContainer: {
    padding: 16,
  },
  dealCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  dealHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  dealTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
  },
  dealBadge: {
    backgroundColor: "#10b981",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  dealBadgeText: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },
  dealDetails: {
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  dealDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  dealDetailLabel: {
    fontSize: 14,
    color: "#64748b",
  },
  dealDetailValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0a1930",
  },
  dealActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dealActionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  dealActionText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#0a1930",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  browseButton: {
    backgroundColor: "#0a1930",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  browseButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default MyDeals
