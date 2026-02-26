import Header from "@/components/onboarding/header";
import TitleTexts from "@/components/onboarding/title-texts";
import SafeAreaWrapper from "@/components/safe-area-wrapper";
import Button from "@/components/ui/button";
import CustomText from "@/components/ui/custom-text";
import OTPInput from "@/components/ui/otp-input";
import { Nav } from "@/constants";
import { Colors, FontName, unitSize } from "@/constants/theme";
import { useNavigation } from "@react-navigation/native";
import { revalidateLogic, useForm } from "@tanstack/react-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import z from "zod";

const formSchema = z.object({
  otp: z.string().min(6, {
    error: "Please enter a 6 digit pin",
  }),
});

const VerifyScreen = () => {
  const navigation = useNavigation<Nav>();

  const form = useForm({
    defaultValues: {
      otp: "",
    },
    validationLogic: revalidateLogic(),
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      navigation.navigate("Category");
      form.reset();
    },
  });

  return (
    <SafeAreaWrapper style={style.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.keyboardContainerStyle}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.mainContainer}>
            <View style={style.mainContent}>
              <View style={style.headerContainer}>
                <Header onPress={() => navigation.replace("GetStarted")} />
                <TitleTexts
                  title="Enter your OTP number"
                  descriptionStyle={style.headerDescription}
                >
                  We’ve sent the OTP number via sms to{" "}
                  <Text style={style.phoneNumberStyle}>+234 8123456789</Text>
                </TitleTexts>
              </View>
              <form.Field name="otp">
                {(field) => (
                  <View style={style.formInputContainer}>
                    <OTPInput
                      field={field}
                      isInvalid={field.state.meta.errors.length > 0}
                    />
                    {field.state.meta.errors.length > 0 && (
                      <CustomText variant="destructive">
                        {field.state.meta.errors
                          .map((e) => e?.message)
                          .join(", ")}
                      </CustomText>
                    )}
                  </View>
                )}
              </form.Field>
            </View>
            <View style={style.buttonContainer}>
              <View style={style.buttonStyle}>
                <Button label="Continue" onPress={form._handleSubmit} />
              </View>
              <CustomText style={style.footerTextStyle}>
                By clicking, I accept the{" "}
                <CustomText style={[style.footerTextStyle, style.footerSpan]}>
                  Terms and Conditions
                </CustomText>{" "}
                &{" "}
                <CustomText style={[style.footerTextStyle, style.footerSpan]}>
                  Privacy Policy
                </CustomText>
              </CustomText>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaWrapper>
  );
};

export default VerifyScreen;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: unitSize.md,
  },
  keyboardContainerStyle: {
    flex: 1,
  },
  headerContainer: {
    gap: 42,
  },
  headerDescription: {
    maxWidth: 290,
  },
  phoneNumberStyle: {
    color: Colors.primaryDark,
    fontSize: 16,
    fontWeight: 600,
    fontFamily: Platform.select({
      android: FontName.android.semibold,
      ios: FontName.ios.semibold,
    }),
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    gap: 8,
    paddingBottom: unitSize.md,
  },
  buttonStyle: {
    flexDirection: "row",
  },
  footerTextStyle: {
    color: Colors.primaryGray,
    fontSize: 12,
    textAlign: "center",
    fontWeight: 500,
    fontFamily: Platform.select({
      android: FontName.android.medium,
      ios: FontName.ios.medium,
    }),
  },
  footerSpan: {
    color: Colors.primaryDark,
  },
  mainContent: {
    gap: unitSize.md,
  },
  formInputContainer: {
    gap: 8,
  },
});
