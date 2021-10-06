import { forwardRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import IconComponent from "../Icons";

//We will be passing a ref to the child component. This is called ref forwarding.
//forwardRef automatically gives us profs and refs that needs to be forwarded.

const ImagePickerComponent = forwardRef(({ }, ref) => {

    const options = [
        {
            name: "Take from camera",
            icon: <IconComponent name="camera" type="fontisto" />,
            onPress: () => { }
        },
        {
            name: "Choose from Gallery",
            icon: <IconComponent name="image" type="material" />,
            onPress: () => { }
        }
    ]
    return (
        <RBSheet
            ref={ref}
            height={300}
            openDuration={250}
            customStyles={{
                container: {
                    justifyContent: "center",
                    alignItems: "center"
                }
            }}
        >
            {options.map(({ name, icon, onPress }) => {
                <TouchableOpacity key={name} onPress={onPress}>
                    {icon}
                    <Text>{name}</Text>
                </TouchableOpacity>
            })}
        </RBSheet>
    );
});

export default ImagePickerComponent;