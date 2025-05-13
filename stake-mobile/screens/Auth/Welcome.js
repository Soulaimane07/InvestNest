import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, ImageBackground } from "react-native"
import { StatusBar } from "expo-status-bar"
import { useSelector } from "react-redux"
import Button from "../../components/Button"

const { width } = Dimensions.get("window")

const Welcome = ({ navigation }) => {
  const language = useSelector((state) => state.user.language)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.logo}>Onid</Text>
        </View>

        <View style={styles.alertContainer}>
          <View style={styles.alertDot} />
          <Text style={styles.alertText}>{language.data.welcome.header.alert}</Text>
        </View>

        <View style={styles.heroContainer}>
          <Text style={styles.heroTitle}>
            {language.data.welcome.header.build1}
            {"\n"}
            {language.data.welcome.header.build2}
            <Text style={styles.heroTitleAccent}>{language.data.welcome.header.estate}</Text>
          </Text>

          <Text style={styles.heroSubtitle}>{language.data.welcome.header.p}</Text>

          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
            style={styles.heroImage}
            imageStyle={styles.heroImageStyle}
          >
            <View style={styles.heroImageOverlay} />
          </ImageBackground>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>10.1%</Text>
            <Text style={styles.statLabel}>Average Returns</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>$500</Text>
            <Text style={styles.statLabel}>Min Investment</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>5k+</Text>
            <Text style={styles.statLabel}>Investors</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title={language.data.form.login}
            variant="outline"
            onPress={() => navigation.navigate("Login")}
            style={styles.loginButton}
          />

          <Button
            title={language.data.form.signup}
            onPress={() => navigation.navigate("Signup")}
            style={styles.signupButton}
          />
        </View>

        <View style={styles.featuredContainer}>
          <Text style={styles.featuredText}>We've been featured in</Text>
          <View style={styles.logosContainer}>
            <Text style={styles.logoText}>Forbes</Text>
            <Text style={styles.logoText}>CNN</Text>
            <Text style={styles.logoText}>Bloomberg</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a1930",
  },
  alertContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(10, 25, 48, 0.05)",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    marginTop: 20,
  },
  alertDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#10b981",
    marginRight: 8,
  },
  alertText: {
    fontSize: 14,
    color: "#0a1930",
  },
  heroContainer: {
    padding: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 36,
    color: "#0a1930",
    marginBottom: 15,
  },
  heroTitleAccent: {
    color: "#10b981",
  },
  heroSubtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#64748b",
    marginBottom: 30,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 20,
  },
  heroImageStyle: {
    borderRadius: 12,
  },
  heroImageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(10, 25, 48, 0.2)",
    borderRadius: 12,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#f8fafc",
    marginHorizontal: 20,
    borderRadius: 12,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0a1930",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#64748b",
  },
  statDivider: {
    width: 1,
    backgroundColor: "#e2e8f0",
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    gap: 15,
  },
  loginButton: {
    marginBottom: 12,
  },
  signupButton: {
    marginBottom: 12,
  },
  featuredContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  featuredText: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 15,
  },
  logosContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 20,
  },
  logoText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#94a3b8",
  },
})

export default Welcome
