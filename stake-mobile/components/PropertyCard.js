"use client"

import { useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native"
import { Ionicons, Feather } from "@expo/vector-icons"
import { useSelector, useDispatch } from "react-redux"
import { toggleSaved, toggleLiked } from "../redux/slices/propertiesSlice"

const { width } = Dimensions.get("window")

const PropertyCard = ({ property, onPress }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const dispatch = useDispatch()
  const language = useSelector((state) => state.user.language)
  const savedProperties = useSelector((state) => state.properties.saved)
  const likedProperties = useSelector((state) => state.properties.liked)

  const isSaved = savedProperties.includes(property.id)
  const isLiked = likedProperties.includes(property.id)

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" }).replace(".00", "")
  }

  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex === property.listImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? property.listImages.length - 1 : prevIndex - 1))
  }

  const handleToggleSaved = () => {
    dispatch(toggleSaved(property.id))
  }

  const handleToggleLiked = () => {
    dispatch(toggleLiked(property.id))
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: property.listImages[imageIndex] }} style={styles.image} resizeMode="cover" />

        <View style={styles.imageNavigation}>
          {property.listImages.map((_, index) => (
            <View key={index} style={[styles.imageDot, imageIndex === index && styles.activeImageDot]} />
          ))}
        </View>

        <TouchableOpacity style={[styles.imageButton, styles.leftButton]} onPress={prevImage}>
          <Ionicons name="chevron-back" size={16} color="#0a1930" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.imageButton, styles.rightButton]} onPress={nextImage}>
          <Ionicons name="chevron-forward" size={16} color="#0a1930" />
        </TouchableOpacity>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={handleToggleSaved}>
            <Ionicons name={isSaved ? "bookmark" : "bookmark-outline"} size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={handleToggleLiked}>
            <Ionicons name={isLiked ? "heart" : "heart-outline"} size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.locationContainer}>
          <Feather name="map-pin" size={14} color="#64748b" />
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

        {property.fundedDate && (
          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>{language.data.propertyCom.funded}</Text>
              <Text style={styles.detailValue}>{formatDate(property.fundedDate)}</Text>
            </View>

            {property.purchasePrice && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{language.data.propertyCom.purchase}</Text>
                <Text style={styles.detailValue}>{formatCurrency(property.purchasePrice)}</Text>
              </View>
            )}

            {property.totalRentalIncome && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>{language.data.propertyCom.total}</Text>
                <Text style={styles.detailValue}>{formatCurrency(property.totalRentalIncome)}</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 16,
  },
  imageContainer: {
    position: "relative",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageNavigation: {
    position: "absolute",
    bottom: 12,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  imageDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderColor: "white",
  },
  activeImageDot: {
    backgroundColor: "white",
  },
  imageButton: {
    position: "absolute",
    top: "50%",
    marginTop: -15,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  leftButton: {
    left: 12,
  },
  rightButton: {
    right: 12,
  },
  actionButtons: {
    position: "absolute",
    top: 12,
    right: 12,
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
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
    marginLeft: 4,
    fontSize: 14,
    color: "#64748b",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
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
    fontSize: 18,
    fontWeight: "bold",
    color: "#0a1930",
  },
  investors: {
    fontSize: 14,
    color: "#64748b",
  },
  returnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#f1f5f9",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  returnLabel: {
    fontSize: 14,
    color: "#64748b",
  },
  returnValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#10b981",
  },
  detailsContainer: {
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  detailLabel: {
    fontSize: 14,
    color: "#64748b",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0a1930",
  },
})

export default PropertyCard
