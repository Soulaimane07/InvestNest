import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native"

const Button = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const getButtonStyle = () => {
    const buttonStyle = [styles.button]

    if (variant === "primary") {
      buttonStyle.push(styles.primaryButton)
    } else if (variant === "outline") {
      buttonStyle.push(styles.outlineButton)
    } else if (variant === "secondary") {
      buttonStyle.push(styles.secondaryButton)
    }

    if (size === "small") {
      buttonStyle.push(styles.smallButton)
    } else if (size === "large") {
      buttonStyle.push(styles.largeButton)
    }

    if (disabled || loading) {
      buttonStyle.push(styles.disabledButton)
    }

    if (style) {
      buttonStyle.push(style)
    }

    return buttonStyle
  }

  const getTextStyle = () => {
    const textStyleArray = [styles.buttonText]

    if (variant === "primary") {
      textStyleArray.push(styles.primaryButtonText)
    } else if (variant === "outline") {
      textStyleArray.push(styles.outlineButtonText)
    } else if (variant === "secondary") {
      textStyleArray.push(styles.secondaryButtonText)
    }

    if (size === "small") {
      textStyleArray.push(styles.smallButtonText)
    } else if (size === "large") {
      textStyleArray.push(styles.largeButtonText)
    }

    if (disabled || loading) {
      textStyleArray.push(styles.disabledButtonText)
    }

    if (textStyle) {
      textStyleArray.push(textStyle)
    }

    return textStyleArray
  }

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress} disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={variant === "outline" ? "#0a1930" : "white"} size="small" />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  primaryButton: {
    backgroundColor: "#0a1930",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#0a1930",
  },
  secondaryButton: {
    backgroundColor: "#f1f5f9",
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    fontWeight: "600",
    textAlign: "center",
  },
  primaryButtonText: {
    color: "white",
  },
  outlineButtonText: {
    color: "#0a1930",
  },
  secondaryButtonText: {
    color: "#0a1930",
  },
  smallButtonText: {
    fontSize: 14,
  },
  largeButtonText: {
    fontSize: 18,
  },
  disabledButtonText: {
    opacity: 0.8,
  },
})

export default Button
