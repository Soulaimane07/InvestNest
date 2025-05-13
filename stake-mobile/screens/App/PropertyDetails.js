"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native"
import { Ionicons, Feather } from "@expo/vector-icons"
import { useSelector, useDispatch } from "react-redux"
import { toggleSaved, toggleLiked } from "../../redux/slices/propertiesSlice"
import Button from "../../components/Button"

const { width } = Dimensions.get("window")

const PropertyDetails = ({ route, navigation }) => {
  const { propertyId } = route.params
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const dispatch = useDispatch()
  const language = useSelector((state) => state.user.language)
  const properties = useSelector((state) => state.properties.list)
  const savedProperties = useSelector((state) => state.properties.saved)
  const likedProperties = useSelector((state) => state.properties.liked)

  const property = properties.find((p) => p.id === propertyId)
  const isSaved = savedProperties.includes(propertyId)
  const isLiked = likedProperties.includes(propertyId)

  if (!property) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>Property not found</Text>
          <Button title="Go Back" onPress={() => navigation.goBack()} style={styles.goBackButton} />
        </View>
      </SafeAreaView>
    )
  }

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" }).replace(".00", "")
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const handleToggleSaved = () => {
    dispatch(toggleSaved(propertyId))
  }

  const handleToggleLiked = () => {
    dispatch(toggleLiked(propertyId))
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
            <TouchableOpacity style={styles.actionButton} onPress={handleToggleSaved}>
              <Ionicons name={isSaved ? "bookmark" : "bookmark-outline"} size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={handleToggleLiked}>
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

          <View style={styles.returnContainer}>
            <Text style={styles.returnLabel}>Annual Return</Text>
            <Text style={styles.returnValue}>+{property.annualReturn}%</Text>
          </View>

          <View style={styles.statsCard}>
            <View style={styles.statRow}>
              <Text style={styles.statLabel}>{language.data.property.funded}</Text>
              <Text style={styles.statValue}>{formatDate(property.fundedDate)}</Text>
            </View>

            <View style={styles.statRow}>
              <Text style={styles.statLabel}>{language.data.property.purchase}</Text>
              <Text style={styles.statValue}>{formatCurrency(property.purchasePrice)}</Text>
            </View>

            <View style={styles.statRow}>
              <Text style={styles.statLabel}>{language.data.property.total}</Text>
              <Text style={styles.statValue}>{formatCurrency(property.totalRentalIncome)}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{language.data.property.overview}</Text>
            <Text style={styles.description}>{property.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features</Text>
            <View style={styles.featuresList}>
              {property.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#0a1930" />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{language.data.property.works.title}</Text>
            <View style={styles.howItWorksContainer}>
              <View style={styles.stepItem}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>1</Text>
                </View>
                <Text style={styles.stepTitle}>{language.data.property.works.step1}</Text>
                <Text style={styles.stepDescription}>{language.data.property.works.p1}</Text>
              </View>

              <View style={styles.stepItem}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>2</Text>
                </View>
                <Text style={styles.stepTitle}>{language.data.property.works.step2}</Text>
                <Text style={styles.stepDescription}>{language.data.property.works.p2}</Text>
              </View>

              <View style={styles.stepItem}>
                <View style={styles.stepNumber}>
                  <Text style={styles.stepNumberText}>3</Text>
                </View>
                <Text style={styles.stepTitle}>{language.data.property.works.step3}</Text>
                <Text style={styles.stepDescription}>{language.data.property.works.p3}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button title={language.data.property.buy} style={styles.investButton} />
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
  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  notFoundText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
    marginBottom: 20,
  },
  goBackButton: {
    width: 200,
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
    color: "#0a1930",
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0a1930",
  },
  investors: {
    fontSize: 16,
    color: "#64748b",
  },
  returnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
    marginBottom: 16,
  },
  returnLabel: {
    fontSize: 16,
    color: "#64748b",
  },
  returnValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#10b981",
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
    color: "#0a1930",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
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
  howItWorksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  stepItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: 16,
  },
  stepNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#0a1930",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  stepNumberText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0a1930",
    marginBottom: 4,
    textAlign: "center",
  },
  stepDescription: {
    fontSize: 12,
    color: "#64748b",
    textAlign: "center",
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
    marginBottom: 0,
  },
})

export default PropertyDetails
