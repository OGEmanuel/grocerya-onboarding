import { countries } from "@/constants/info";
import { FormFieldApi } from "@/lib/util";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";

interface SelectFieldProps<TValue = string> {
  field: FormFieldApi<TValue>;
  style?: StyleProp<ViewStyle>;
}
const SelectCountryScreen = <TValue = string,>(
  props: SelectFieldProps<TValue>,
) => {
  const { style, field } = props;

  return (
    <SelectCountry
      style={[styles.dropdown, style]}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      containerStyle={styles.modalStyle}
      search
      mode="modal"
      maxHeight={400}
      value={field.state.value}
      data={countries}
      valueField="value"
      labelField="lable"
      imageField="image"
      placeholder="Select country"
      searchPlaceholder="Search..."
      onChange={(e) => {
        field.handleChange(e.value);
      }}
    />
  );
};

export default SelectCountryScreen;

const styles = StyleSheet.create({
  dropdown: {
    height: 52,
    borderRadius: 8,
    backgroundColor: "#F2F2F3",
    paddingVertical: 14,
    paddingHorizontal: 2,
  },
  imageStyle: {
    display: "none",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    display: "none",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  modalStyle: {
    borderRadius: 16,
    height: 300,
    width: 250,
    padding: 8,
    backgroundColor: "#fff",
    elevation: 8, // Android shadow
  },
});
