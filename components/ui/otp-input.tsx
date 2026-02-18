import { Colors, unitSize } from "@/constants/theme";
import { FormFieldApi } from "@/lib/util";
import React, { useRef, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import CustomText from "./custom-text";

const OTP_LENGTH = 6;

interface VerifyFieldProps<TValue = string> {
  field: FormFieldApi<TValue>;
  isInvalid?: boolean;
}

const OTPInput = <TValue = string,>(props: VerifyFieldProps<TValue>) => {
  const { field, isInvalid } = props;

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const code = field.state.value as string;

  const handleChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, "");
    if (cleaned.length <= OTP_LENGTH) {
      field.handleChange(cleaned as TValue);
    }
  };

  return (
    <Pressable
      onPress={() => inputRef.current?.focus()}
      style={styles.container}
    >
      <TextInput
        ref={inputRef}
        value={field.state.value as string}
        onChangeText={handleChange}
        keyboardType="number-pad"
        maxLength={OTP_LENGTH}
        style={styles.hiddenInput}
        textContentType="oneTimeCode"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <View style={styles.boxContainer}>
        {Array.from({ length: OTP_LENGTH }).map((_, index) => {
          const isActive = isFocused && index === code.length;

          return (
            <View
              key={index}
              style={[
                styles.box,
                isActive && styles.activeBox,
                index < code.length && styles.activeBox,
                isInvalid && styles.invalid,
              ]}
            >
              <CustomText style={styles.text}>{code[index] || ""}</CustomText>
            </View>
          );
        })}
      </View>
    </Pressable>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
  },
  boxContainer: {
    flexDirection: "row",
    gap: 10,
    height: 71,
  },
  box: {
    flex: 1,
    height: "100%",
    backgroundColor: Colors.primaryOffWhite,
    borderColor: Colors.primaryOffWhite,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: unitSize.md,
    color: Colors.primaryDark,
  },
  activeBox: {
    borderWidth: 1,
    borderColor: Colors.primaryDark,
  },
  invalid: {
    borderWidth: 1,
    borderColor: "red",
  },
});
