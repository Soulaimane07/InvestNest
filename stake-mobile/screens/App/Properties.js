"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from "react-native"
import { Ionicons, Feather } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import Header from "../../components/Header"
import PropertyCard from "../../components/PropertyCard"

const Properties = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const language = useSelector((state) => state.user.language)
  const properties = useSelector((state) => state.properties.list)

  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <SafeAreaView style={styles.container}>
      <Header title={language.data.properties.title} />

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Feather name="search" size={20} color="#64748b" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search properties..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Feather name="x" size={20} color="#64748b" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate("SavedProperties")}>
            <Ionicons name="bookmark-outline" size={20} color="#0a1930" />
            <Text style={styles.filterButtonText}>Saved</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate("LikedProperties")}>
            <Ionicons name="heart-outline" size={20} color="#0a1930" />
            <Text style={styles.filterButtonText}>Liked</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton}>
            <Feather name="filter" size={20} color="#0a1930" />
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onPress={() => navigation.navigate("PropertyDetails", { propertyId: property.id })}
            />
          ))
        ) : (
          <View style={styles.noResultsContainer}>
            <Feather name="search" size={50} color="#94a3b8" />
            <Text style={styles.noResultsText}>No properties found</Text>
            <Text style={styles.noResultsSubtext}>Try adjusting your search</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  filterButtonText: {
    marginLeft: 6,
    fontSize: 14,
    color: "#0a1930",
  },
  scrollContainer: {
    padding: 16,
  },
  noResultsContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  noResultsText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
    marginTop: 16,
  },
  noResultsSubtext: {
    fontSize: 16,
    color: "#64748b",
    marginTop: 8,
  },
})

export default Properties
