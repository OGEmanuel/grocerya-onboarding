import Indicator from "@/components/indicator";
import InfoCard from "@/components/info-card";
import SafeAreaWrapper from "@/components/safe-area-wrapper";
import Button from "@/components/ui/button";
import { Nav } from "@/constants";
import { INFO } from "@/constants/info";
import { unitSize } from "@/constants/theme";
import { getFullWidth } from "@/lib/util";
import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const Intro = () => {
  const scrollRef = useRef<ScrollView>(null);
  const [page, setPage] = useState<number>(0);
  const navigation = useNavigation<Nav>();

  const handleScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ): void => {
    const position = e.nativeEvent.contentOffset.x;
    setPage(Math.round(position / getFullWidth()));
  };

  const scrollToPage = (index: number): void => {
    scrollRef.current?.scrollTo({
      x: index * getFullWidth(),
      animated: true,
    });
  };

  const goToNextPage = (): void => {
    if (page === INFO.length - 1) {
      navigation.navigate("GetStarted");
      return;
    }
    scrollToPage(page + 1);
  };

  return (
    <SafeAreaWrapper>
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
            <Button
              variant="secondary"
              label="Skip"
              onPress={() => scrollToPage(3)}
            />
          )}
          <Button
            label={page === INFO.length - 1 ? "Get Started" : "Next"}
            onPress={goToNextPage}
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default Intro;

const style = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: unitSize.md,
    paddingHorizontal: unitSize.md,
    paddingBottom: unitSize.md,
  },
});
