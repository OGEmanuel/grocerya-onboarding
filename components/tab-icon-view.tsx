import { Colors } from "@/constants/theme";
import CartIcon from "./jsx-icons/cart-icon";
import FaveIcon from "./jsx-icons/fave-icon";
import HomeIcon from "./jsx-icons/home-icon";
import ProfileIcon from "./jsx-icons/profile-icon";

const TabIconView = (props: {
  name: string;
  focused: boolean;
  color: string;
}) => {
  const { name, focused, color } = props;

  return (
    <>
      {name === "Home" && (
        <HomeIcon fill={focused ? color : Colors.secondaryGray} />
      )}
      {name === "Cart" && (
        <CartIcon fill={focused ? color : Colors.secondaryGray} />
      )}
      {name === "Favorite" && (
        <FaveIcon fill={focused ? color : Colors.secondaryGray} />
      )}
      {name === "Profile" && (
        <ProfileIcon fill={focused ? color : Colors.secondaryGray} />
      )}
    </>
  );
};

export default TabIconView;
