import HomeWrapper from "@/components/home-wrapper";
import { HomeTabsParamList } from "@/constants";
import { RouteProp, useRoute } from "@react-navigation/native";

type ProfileScreenRouteProp = RouteProp<HomeTabsParamList, "Profile">;

const Profile = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const { fullName, emailAddress } = route.params ?? {};

  return (
    <HomeWrapper
      page="Profile"
      fullName={fullName ?? "John Doe"}
      emailAddress={emailAddress ?? "john.doe@example.com"}
    />
  );
};

export default Profile;
