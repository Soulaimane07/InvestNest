"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native"
import { Ionicons, Feather } from "@expo/vector-icons"

const { width } = Dimensions.get("window")

const Property = ({ route, navigation }) => {
  const { propertyId } = route.params
  const [isSaved, setIsSaved] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Mock property data
  const property = {
    id: propertyId,
    title: "2 Bed Studio One Tower",
    location: "Dubai",
    price: 1234000,
    totalInvestors: 45,
    fundedDate: "2023-05-15",
    purchasePrice: 1150000,
    totalRentalIncome: 125000,
    annualReturn: 8.4,
    minInvestment: 500,
    description:
      "A luxurious 2-bedroom apartment in the prestigious Studio One Tower. This property offers stunning views of the Dubai skyline and is located in a prime area with excellent rental potential.",
    features: ["2 Bedrooms", "2 Bathrooms", "Fully Furnished", "Balcony", "Swimming Pool", "Gym", "24/7 Security"],
    listImages: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" }).replace(".00", "")
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: property.listImages[activeImageIndex] }}
            style={styles.propertyImage}
            resizeMode="cover"
          />

          <View style={styles.imageNavigation}>
            {property.listImages.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.imageDot, activeImageIndex === index && styles.activeImageDot]}
                onPress={() => setActiveImageIndex(index)}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton} onPress={() => setIsSaved(!isSaved)}>
              <Ionicons name={isSaved ? "bookmark" : "bookmark-outline"} size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={() => setIsLiked(!isLiked)}>
              <Ionicons name={isLiked ? "heart" : "heart-outline"} size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.locationContainer}>
            <Feather name="map-pin" size={16} color="#64748b" />
            <Text style={styles.locationText}>{property.location}</Text>
          </View>

          <Text style={styles.title}>{property.title}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formatCurrency(property.price)}</Text>
            <Text style={styles.investors}>{property.totalInvestors} Investors</Text>
          </View>

          <View style={styles.statsCard}>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Funded Date</Text>
              <Text style={styles.statValue}>{formatDate(property.fundedDate)}</Text>
            </View>

            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Purchase Price</Text>
              <Text style={styles.statValue}>{formatCurrency(property.purchasePrice)}</Text>
            </View>

            <View style={styles.statRow}>
              <Text style={styles.statLabel}>Total Rental Income</Text>
              <Text style={styles.statValue}>{formatCurrency(property.totalRentalIncome)}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About this property</Text>
            <Text style={styles.description}>{property.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features</Text>
            <View style={styles.featuresList}>
              {property.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#0d9488" />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.investmentDetails}>
            <View style={styles.investmentDetail}>
              <Text style={styles.investmentDetailLabel}>Annual Return</Text>
              <Text style={styles.investmentDetailValue}>{property.annualReturn}%</Text>
            </View>

            <View style={styles.investmentDetail}>
              <Text style={styles.investmentDetailLabel}>Min Investment</Text>
              <Text style={styles.investmentDetailValue}>{formatCurrency(property.minInvestment)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.investButton}>
          <Text style={styles.investButtonText}>Invest Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 300,
  },
  propertyImage: {
    width: "100%",
    height: "100%",
  },
  imageNavigation: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  imageDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderColor: "white",
  },
  activeImageDot: {
    backgroundColor: "white",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtons: {
    position: "absolute",
    top: 16,
    right: 16,
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    padding: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  locationText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#64748b",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0d9488",
  },
  investors: {
    fontSize: 16,
    color: "#64748b",
  },
  statsCard: {
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  statLabel: {
    fontSize: 16,
    color: "#64748b",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0f172a",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#334155",
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  featureText: {
    fontSize: 16,
    color: "#334155",
  },
  investmentDetails: {
    flexDirection: "row",
    backgroundColor: "#e6f7f5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  investmentDetail: {
    flex: 1,
    alignItems: "center",
  },
  investmentDetailLabel: {
    fontSize: 14,
    color: "#0f766e",
    marginBottom: 4,
  },
  investmentDetailValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0d9488",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    padding: 16,
  },
  investButton: {
    backgroundColor: "#0d9488",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  investButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default Property
