import { forwardRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import IconComponent from "../Icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import colors from "../../../assets/theme/colors";
import ImagePicker from 'react-native-image-crop-picker';

//We will be passing a ref to the child component. This is called ref forwarding.
//forwardRef automatically gives us profs and refs that needs to be forwarded.

const ImagePickerComponent = forwardRef(({ onFileSelected }, ref) => {

    const options = [
        {
            name: "Take from camera",
            icon: <IconComponent name="camera" type="fontisto" color={colors.grey} size={21} />,
            onPress: () => {
                ImagePicker.openCamera({
                    width: 300,
                    height: 300,
                    cropping: true,
                    freeStyleCropEnabled: true,
                }).then((image) => {
                    onFileSelected(image);
                }).catch((error) => {
                    console.log("error in image: ", error);
                })
                // console.log('hi')
            }
        },
        {
            name: "Choose from Gallery",
            icon: <IconComponent name="image" type="fontAwesome" color={colors.grey} size={21} />,
            onPress: () => {
                ImagePicker.openPicker({
                    width: 300,
                    height: 300,
                    cropping: true,
                    freeStyleCropEnabled: true,
                }).then((image) => {
                    onFileSelected(image);
                }).catch((error) => {
                    console.log("error in image: ", error);
                })
                // console.log('hi')
            }
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