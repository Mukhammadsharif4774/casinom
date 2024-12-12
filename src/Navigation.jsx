import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS} from './helpers/colors';
import CasinomHomeScreen from './pages/CasinomHomeScreen';
import CasinomCartScreen from './pages/CasinomCartScreen';
import CasinomCartSuccessScreen from './pages/CasinomCartSuccessScreen';
import CasinomReservationScreen from './pages/CasinomReservationScreen';
import CasinomReservationSuccessScreen from './pages/CasinomReserveSuccessScreen';
import CasinomContactsScreen from './pages/CasinomContactsScreen';
import CasinomEventsScreen from './pages/CasinomEventsScreen';
import CasinomEventDetailScreen from './pages/CasinomEventDetailScreen';
import CloseIcon from './assets/close_icon.png';
import CartIcon from './assets/drawer_cart_icon.png';
import Logo from './assets/drawer_logo.png';

const {width, height} = Dimensions.get('window');
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width,
          height,
          backgroundColor: COLORS.black,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {drawerScreens.map(({name, component}) => (
        <Drawer.Screen key={name} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'ГЛАВНАЯ', screen: 'CasinomHomeScreen'},
    {label: 'КОРЗИНА', screen: 'CasinomCartScreen'},
    {label: 'КОНТАКТЫ', screen: 'CasinomContactsScreen'},
    {label: 'РЕЗЕРВ СТОЛИКА', screen: 'CasinomReservationScreen'},
    {label: 'СОБЫТИЯ', screen: 'CasinomEventsScreen'},
  ];

  const navigateToScreen = screen => {
    navigation.navigate('DrawerNavigator', {screen});
  };

  return (
    <View style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image source={CloseIcon} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.mainContainer}>
        {drawerItems.map(({label, screen}) => (
          <TouchableOpacity
            key={screen}
            onPress={() => navigateToScreen(screen)}
            style={
              screen === 'CasinomHomeScreen'
                ? styles.drawerItemFirst
                : styles.drawerItem
            }>
            <Text
              style={
                screen === 'CasinomHomeScreen'
                  ? styles.itemTextFirst
                  : styles.itemText
              }>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigateToScreen('CasinomCartScreen')}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
    </View>
  );
}

const drawerScreens = [
  {name: 'CasinomHomeScreen', component: CasinomHomeScreen},
  {name: 'CasinomCartScreen', component: CasinomCartScreen},
  {name: 'CasinomCartSuccessScreen', component: CasinomCartSuccessScreen},
  {name: 'CasinomReservationScreen', component: CasinomReservationScreen},
  {
    name: 'CasinomReservationSuccessScreen',
    component: CasinomReservationSuccessScreen,
  },
  {name: 'CasinomContactsScreen', component: CasinomContactsScreen},
  {name: 'CasinomEventsScreen', component: CasinomEventsScreen},
  {name: 'CasinomEventDetailScreen', component: CasinomEventDetailScreen},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
    height: height,
    width: width,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  logoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 40,
    backgroundColor: COLORS.main,
  },
  logo: {
    width: width * 0.8,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
  },
  mainContainer: {
    marginTop: 40,
    alignItems: 'flex-start',
    width: width,
  },
  drawerItemFirst: {
    justifyContent: 'center',
    width: '75%',
    marginTop: 15,
    backgroundColor: COLORS.main,
    paddingVertical: 15,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  drawerItem: {
    justifyContent: 'center',
    width: '75%',
    marginTop: 15,
    backgroundColor: COLORS.black,
    paddingVertical: 15,
    borderWidth: 2,
    borderLeftWidth: 0,
    borderColor: COLORS.main,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  itemText: {
    fontSize: 23,
    fontFamily: FONTS.black,
    color: COLORS.main,
    textAlign: 'left',
    paddingLeft: 30,
  },
  itemTextFirst: {
    fontSize: 23,
    fontFamily: FONTS.black,
    color: COLORS.black,
    textAlign: 'left',
    paddingLeft: 30,
  },
  cartIcon: {
    width: 60,
    height: 70,
    alignSelf: 'center',
    objectFit: 'contain',
    position: 'absolute',
    top: 100,
  },
});
