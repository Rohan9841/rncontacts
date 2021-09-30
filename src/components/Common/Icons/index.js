import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import Fontisto from "react-native-vector-icons/Fontisto"
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Zocial from "react-native-vector-icons/Zocial";
import React from "react";

const IconComponent = ({ type, ...props }) => {

    const getIconFont = (type) => {
        switch (type) {
            case "ant":
                return AntDesign;
            case "entypo":
                return Entypo;
            case "evil":
                return EvilIcons;
            case "feather":
                return Feather;
            case "fontAwesome":
                return FontAwesome;
            case "fontAwesome5":
                return FontAwesome5;
            case "fontAwesome5Pro":
                return FontAwesome5Pro;
            case "fontisto":
                return Fontisto
            case "foundation":
                return Foundation;
            case "ionic":
                return Ionicons;
            case "materialCommunity":
                return MaterialCommunityIcons;
            case "material":
                return MaterialIcons;
            case "octicons":
                return Octicons;
            case "simpleLine":
                return SimpleLineIcons;
            case "zocial":
                return Zocial;
            default:
                return Fontisto
        }
    }

    const FontIcon = getIconFont(type);

    return <FontIcon {...props} />;
}


export default IconComponent;