import Header from "@/components/onboarding/header";
import TitleTexts from "@/components/onboarding/title-texts";
import SafeAreaWrapper from "@/components/safe-area-wrapper";
import Button from "@/components/ui/button";
import CustomText from "@/components/ui/custom-text";
import { categories } from "@/constants/info";
import { Colors, unitSize } from "@/constants/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

const CategoryScreen = () => {
  const [selected, setSelected] = useState([{ id: 1, name: "Gluten-Free" }]);
  const router = useRouter();

  const handleSelect = (id: number) => {
    setSelected((prev) => {
      const isSelected = prev.some((item) => item.id === id);

      if (isSelected) {
        if (prev.length === 1) return prev;

        return prev.filter((item) => item.id !== id);
      }

      const itemToAdd = categories.find((item) => item.id === id);
      if (!itemToAdd) return prev;

      return [...prev, itemToAdd];
    });
  };

  const isSelected = (id: number) => selected.some((item) => item.id === id);

  return (
    <SafeAreaWrapper>
      <View style={style.container}>
        <View style={style.mainContent}>
          <View style={style.headerContainer}>
            <Header onPress={() => router.replace("/get-started")} />
            <TitleTexts title="All your grocery need in one place">
              Select your desired shop category
            </TitleTexts>
          </View>
          <View style={style.pillContainer}>
            {categories.map((category) => (
              <Pressable
                key={category.id}
                onPress={() => handleSelect(category.id)}
              >
                <CustomText
                  style={[
                    style.categoryPill,
                    isSelected(category.id) && style.selectedPill,
                  ]}
                >
                  {category.name}
                </CustomText>
              </Pressable>
            ))}
            <CustomText style={style.categoryPill}>Show +22 More</CustomText>
          </View>
        </View>
        <View style={style.buttonContainer}>
          <Button
            label="Continue"
            onPress={() => router.push("/get-started")}
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default CategoryScreen;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: unitSize.md,
    flex: 1,
    justifyContent: "space-between",
  },
  headerContainer: {
    gap: 42,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingBottom: unitSize.md,
  },
  mainContent: {
    gap: unitSize.md,
  },
  categoryPill: {
    backgroundColor: Colors.primaryOffWhite,
    color: Colors.primaryDark,
    fontWeight: 500,
    paddingVertical: 8,
    paddingHorizontal: unitSize.md,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "transparent",
  },
  pillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  selectedPill: {
    backgroundColor: Colors.green10,
    borderColor: Colors.supportGreen,
    borderWidth: 1,
  },
});
