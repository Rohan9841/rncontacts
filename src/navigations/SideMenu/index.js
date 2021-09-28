
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/Container';
import styles from './styles';
import React from 'react';
import { SETTINGS } from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import IconComponent from '../../components/Common/Icons';

const SideMenu = ({ navigation, authDispatch }) => {

    const handleLogout = () => {
        navigation.toggleDrawer();
        Alert.alert(
            "Logout!",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                },
                {
                    text: "Ok",
                    onPress: () => { logoutUser()(authDispatch) }
                }
            ]
        )
    }
    const menuItems = [
        { icon: <IconComponent type="fontisto" size={17} name="player-settings" />, name: "Settings", onPress: () => { navigation.navigate(SETTINGS) } },
        { icon: <IconComponent type="material" size={17} name="logout" />, name: "Logout", onPress: handleLogout },
    ]

    return (
        //SafeAreaView helps the items to not overfow
        <SafeAreaView>
            <Container>
                <Image
                    height={70}
                    width={70}
                    source={require('../../assets/images/logo.png')}
                    style={styles.logoImage}
                />

                <View style={{ paddingLeft: 70 }}>
                    {menuItems.map(item => (
                        <TouchableOpacity
                            key={item.name}
                            style={styles.item}
                            onPress={item.onPress}
                        >
                            {item.icon}
                            <Text style={styles.itemText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Container>
        </SafeAreaView >
    )
}

export default SideMenu;