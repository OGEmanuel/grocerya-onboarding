import Indicator from "@/components/indicator";
import InfoCard from "@/components/info-card";
import Button from "@/components/ui/button";
import { INFO } from "@/constants/info";
import { useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FULL_WIDTH = Dimensions.get("window").width;

export default function HomeScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const [page, setPage] = useState<number>(0);

  const handleScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ): void => {
    const position = e.nativeEvent.contentOffset.x;
    setPage(Math.round(position / FULL_WIDTH));
  };

  const scrollToPage = (index: number): void => {
    scrollRef.current?.scrollTo({
      x: index * FULL_WIDTH,
      animated: true,
    });
  };

  const goToNextPage = (): void => {
    if (page === INFO.length - 1) return;
    scrollToPage(page + 1);
  };

  return (
    <SafeAreaView style={style.mainWrapper}>
      <View style={style.itemContainer}>
        <Indicator page={page} totalPages={INFO.length} />
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
        >
          {INFO.map((info) => (
            <InfoCard
              key={info.id}
              title={info.title}
              description={info.description}
            >
              {info.icon}
            </InfoCard>
          ))}
        </ScrollView>
        <View style={style.buttonWrapper}>
          {page !== INFO.length - 1 && (
            <Button variant="secondary" label="Skip" />
          )}
          <Button
            label={page === INFO.length - 1 ? "Get Started" : "Next"}
            onPress={goToNextPage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  itemContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === "android" ? 28 : 0,
  },
});
