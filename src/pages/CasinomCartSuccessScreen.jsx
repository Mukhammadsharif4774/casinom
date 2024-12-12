import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import CasinomHeader from '../components/CasinomHeader';
import CasinomComponent from '../components/CasinomComponent';
import SuccessIcon from '../assets/success_icon.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'CasinomHomeScreen'});
  };

  return (
    <View style={styles.container}>
      <CasinomHeader />

      <Text style={styles.text}>Спасибо{'\n'} за заказ!</Text>

      <View style={styles.qrContainer}>
        <QRCode
          value="https://top.uz/company/bavaria-plaza-zar-savdo-ishonch-ooo-restoran"
          size={Dimensions.get('window').width / 2.5}
          color={COLORS.blue}
        />
      </View>

      <CasinomComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: '25%',
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  successIcon: {
    marginTop: 20,
    width: width * 0.5,
    height: width * 0.5,
    objectFit: 'contain',
    alignSelf: 'center',
  },
  text: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 35,
    marginTop: '15%',
    backgroundColor: COLORS.main,
    paddingVertical: 15,
  },
  image: {
    width: width * 0.35,
    height: width * 0.35,
    alignSelf: 'center',
    objectFit: 'contain',
    marginTop: 20,
  },
});
