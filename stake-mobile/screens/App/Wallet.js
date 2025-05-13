"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Modal, TextInput, FlatList } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import Header from "../../components/Header"
import Button from "../../components/Button"

const Wallet = () => {
  const [depositModalVisible, setDepositModalVisible] = useState(false)
  const [withdrawModalVisible, setWithdrawModalVisible] = useState(false)
  const [amount, setAmount] = useState("")

  const language = useSelector((state) => state.user.language)
  const wallet = useSelector((state) => state.wallet.data)

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" }).replace(".00", "")
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  const getTransactionIcon = (type) => {
    switch (type) {
      case "deposit":
        return <MaterialIcons name="arrow-downward" size={24} color="#10b981" />
      case "withdrawal":
        return <MaterialIcons name="arrow-upward" size={24} color="#ef4444" />
      case "investment":
        return <MaterialIcons name="real-estate-agent" size={24} color="#0ea5e9" />
      case "return":
        return <MaterialIcons name="payments" size={24} color="#10b981" />
      default:
        return <MaterialIcons name="swap-horiz" size={24} color="#64748b" />
    }
  }

  const getTransactionTitle = (type) => {
    switch (type) {
      case "deposit":
        return "Deposit"
      case "withdrawal":
        return "Withdrawal"
      case "investment":
        return "Investment"
      case "return":
        return "Rental Return"
      default:
        return "Transaction"
    }
  }

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionIconContainer}>{getTransactionIcon(item.type)}</View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{getTransactionTitle(item.type)}</Text>
        <Text style={styles.transactionDate}>{formatDate(item.date)}</Text>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          item.type === "withdrawal" || item.type === "investment" ? styles.negativeAmount : styles.positiveAmount,
        ]}
      >
        {item.type === "withdrawal" || item.type === "investment" ? "-" : "+"}
        {formatCurrency(item.amount)}
      </Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Header title={language.data.myWallet.title} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>{language.data.myWallet.cash}</Text>
          <Text style={styles.balanceAmount}>{formatCurrency(wallet?.balance || 0)}</Text>

          <View style={styles.balanceActions}>
            <Button
              title={language.data.myWallet.deposit}
              onPress={() => setDepositModalVisible(true)}
              style={styles.depositButton}
            />
            <Button
              title={language.data.myWallet.withdraw}
              variant="outline"
              onPress={() => setWithdrawModalVisible(true)}
              style={styles.withdrawButton}
            />
          </View>
        </View>

        <View style={styles.rewardsCard}>
          <View style={styles.rewardsHeader}>
            <Text style={styles.rewardsLabel}>{language.data.myWallet.rewards}</Text>
            <Text style={styles.rewardsAmount}>{formatCurrency(500)}</Text>
          </View>
          <Text style={styles.rewardsDescription}>{language.data.myWallet.p}</Text>
        </View>

        <View style={styles.transactionsContainer}>
          <Text style={styles.transactionsTitle}>{language.data.myWallet.transactions}</Text>

          <View style={styles.transactionsHeader}>
            <Text style={styles.transactionsHeaderText}>{language.data.myWallet.type}</Text>
            <Text style={styles.transactionsHeaderText}>{language.data.myWallet.date}</Text>
            <Text style={styles.transactionsHeaderText}>{language.data.myWallet.amount}</Text>
          </View>

          <FlatList
            data={wallet?.transactions || []}
            renderItem={renderTransaction}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>

      {/* Deposit Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={depositModalVisible}
        onRequestClose={() => setDepositModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{language.data.myWallet.depositM}</Text>

            <Text style={styles.modalLabel}>{language.data.myWallet.select}</Text>
            <TextInput
              style={styles.modalInput}
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
              placeholder="0.00"
            />

            <View style={styles.modalActions}>
              <Button
                title={language.data.myWallet.cancel}
                variant="outline"
                onPress={() => {
                  setDepositModalVisible(false)
                  setAmount("")
                }}
                style={styles.modalCancelButton}
              />
              <Button
                title={language.data.myWallet.deposit}
                onPress={() => {
                  // Handle deposit
                  setDepositModalVisible(false)
                  setAmount("")
                }}
                style={styles.modalConfirmButton}
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* Withdraw Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={withdrawModalVisible}
        onRequestClose={() => setWithdrawModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{language.data.myWallet.withdrawM}</Text>

            <Text style={styles.modalLabel}>{language.data.myWallet.select}</Text>
            <TextInput
              style={styles.modalInput}
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
              placeholder="0.00"
            />

            <View style={styles.modalActions}>
              <Button
                title={language.data.myWallet.cancel}
                variant="outline"
                onPress={() => {
                  setWithdrawModalVisible(false)
                  setAmount("")
                }}
                style={styles.modalCancelButton}
              />
              <Button
                title={language.data.myWallet.withdraw}
                onPress={() => {
                  // Handle withdrawal
                  setWithdrawModalVisible(false)
                  setAmount("")
                }}
                style={styles.modalConfirmButton}
              />
            </View>
          </View>
        </View>
      </Modal>
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
  balanceCard: {
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
  balanceLabel: {
    fontSize: 16,
    color: "#64748b",
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0a1930",
    marginBottom: 20,
  },
  balanceActions: {
    flexDirection: "row",
    gap: 12,
  },
  depositButton: {
    flex: 1,
  },
  withdrawButton: {
    flex: 1,
  },
  rewardsCard: {
    backgroundColor: "#f1f5f9",
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  rewardsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  rewardsLabel: {
    fontSize: 16,
    color: "#64748b",
  },
  rewardsAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0a1930",
  },
  rewardsDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: "#64748b",
  },
  transactionsContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0a1930",
    marginBottom: 16,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
    marginBottom: 12,
  },
  transactionsHeaderText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#64748b",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#0a1930",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 14,
    color: "#64748b",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
  },
  positiveAmount: {
    color: "#10b981",
  },
  negativeAmount: {
    color: "#ef4444",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    width: "90%",
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0a1930",
    marginBottom: 20,
    textAlign: "center",
  },
  modalLabel: {
    fontSize: 16,
    color: "#64748b",
    marginBottom: 8,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  modalCancelButton: {
    flex: 1,
  },
  modalConfirmButton: {
    flex: 1,
  },
})

export default Wallet
