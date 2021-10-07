import { forwardRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import IconComponent from "../Icons";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import colors from "../../../assets/theme/colors";

//We will be passing a ref to the child component. This is called ref forwarding.
//forwardRef automatically gives us profs and refs that needs to be forwarded.

const ImagePickerComponent = forwardRef(({ }, ref) => {

    const options = [
        {
            name: "Take from camera",
            icon: <IconComponent name="camera" type="fontisto" color={colors.grey} size={21} />,
            onPress: () => { }
        },
        {
            name: "Choose from Gallery",
            icon: <IconComponent name="image" type="fontAwesome" color={colors.grey} size={21} />,
            onPress: () => { }
        }
    ]
    return (
        <RBSheet
            ref={ref}
            height={300}
            openDuration={250}
            closeOnDragDown
            customStyles={{
                container: {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20
                }
            }}
        >
            <View style={styles.bottomSheetWrapper}>
                {options.map(({ name, icon, onPress }) => (
                    <TouchableOpacity
                        key={name}
                        onPress={onPress}
                        style={styles.bottomSheetOptions}
                    >
                        {icon}
                        <Text style={styles.optionsText}>{name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </RBSheet>
    );
});

export default ImagePickerComponent;