import Header from "@/components/onboarding/header";
import TitleTexts from "@/components/onboarding/title-texts";
import SafeAreaWrapper from "@/components/safe-area-wrapper";
import Button from "@/components/ui/button";
import CustomText from "@/components/ui/custom-text";
import SelectCountryScreen from "@/components/ui/dropdown";
import { Colors, FontName, unitSize } from "@/constants/theme";
import { revalidateLogic, useForm } from "@tanstack/react-form";
import { useRouter } from "expo-router";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { z } from "zod";

const formSchema = z.object({
  phoneCode: z.string().min(2, {
    error: "Please select a country code",
  }),
  phoneNumber: z.string().min(9, {
    error: "Please enter a valid number",
  }),
});

const GetStartedScreen = () => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      phoneCode: "🇳🇬 +234",
      phoneNumber: "",
    },
    validationLogic: revalidateLogic(),
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      router.push({
        pathname: "/verify",
        params: {
          code: value.phoneCode.slice(5).trim(),
          phoneNumber: value.phoneNumber,
        },
      });
      form.reset();
    },
  });

  return (
    <SafeAreaWrapper style={style.mainWrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.keyboardContainerStyle}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.container}>
            <View style={style.contentWrapper}>
              <View style={style.headerWrapper}>
                <Header />
                <TitleTexts title="Get Started">
                  You can log in or make an account if you’re new
                </TitleTexts>
              </View>
              <View>
                <CustomText style={style.label}>
                  Enter your phone number
                </CustomText>
                <View style={style.inputWrapper}>
                  <form.Field name="phoneCode">
                    {(field) => (
                      <SelectCountryScreen
                        field={field}
                        style={style.countryCodeInput}
                      />
                    )}
                  </form.Field>
                  <form.Field name="phoneNumber">
                    {(field) => (
                      <View style={style.phoneInputWrapper}>
                        <TextInput
                          value={field.state.value}
                          onChangeText={field.handleChange}
                          style={[
                            style.phoneInput,
                            field.state.meta.errors.length > 0 &&
                              style.phoneErrorState,
                          ]}
                          keyboardType="phone-pad"
                          placeholder="Phone Number"
                          inputMode="tel"
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
              </View>
            </View>
            <View style={style.buttonWrapper}>
              <Button label="Continue" onPress={form._handleSubmit} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaWrapper>
  );
};

export default GetStartedScreen;

const style = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: unitSize.md,
  },
  keyboardContainerStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  label: {
    color: Colors.primaryDark,
    fontSize: 14,
    fontFamily: Platform.select({
      android: FontName.android.medium,
      ios: FontName.ios.medium,
    }),
  },
  contentWrapper: {
    gap: unitSize.md,
  },
  headerWrapper: {
    gap: unitSize.xl,
  },
  buttonWrapper: {
    flexDirection: "row",
    paddingBottom: unitSize.md,
  },
  inputWrapper: {
    flexDirection: "row",
    gap: 8,
  },
  countryCodeInput: {
    flex: 1 / 4,
  },
  phoneInputWrapper: {
    flex: 3 / 4,
    gap: 8,
  },
  phoneInput: {
    backgroundColor: "#F2F2F3",
    height: 52,
    borderRadius: 8,
    paddingLeft: unitSize.md,
  },
  phoneErrorState: {
    borderColor: "red",
    borderWidth: 1,
  },
});
