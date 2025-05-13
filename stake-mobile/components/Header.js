import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"

const Header = ({ title, showBack = false, showProfile = true }) => {
  const navigation = useNavigation()
  const user = useSelector((state) => state.user.user)
  const savedProperties = useSelector((state) => state.properties.saved || [])
  const likedProperties = useSelector((state) => state.properties.liked || [])

  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        {showBack && (
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#0a1930" />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>

      {showProfile && (
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("LikedProperties")}>
            <View style={styles.iconBadgeContainer}>
              <Ionicons name="heart" size={22} color="#64748b" />
              {likedProperties.length > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{likedProperties.length}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("SavedProperties")}>
            <View style={styles.iconBadgeContainer}>
              <Ionicons name="bookmark" size={22} color="#64748b" />
              {savedProperties.length > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{savedProperties.length}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate("Profile")}>
            <View style={styles.profileCircle}>
              <Text style={styles.profileInitial}>{user?.fullname ? user.fullname.charAt(0).toUpperCase() : "U"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconButton: {
    padding: 8,
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
  },
  iconBadgeContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#0a1930",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  profileButton: {
    padding: 2,
  },
  profileCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#0a1930",
    justifyContent: "center",
    alignItems: "center",
  },
  profileInitial: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default Header
