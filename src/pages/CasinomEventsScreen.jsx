import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import CasinomHeader from '../components/CasinomHeader';
import {useNavigation} from '@react-navigation/native';
import Event_1 from '../assets/event_1.png';
import Event_2 from '../assets/event_2.png';
import Event_3 from '../assets/event_3.png';
import Event_4 from '../assets/event_4.png';

const events = [
  {title: 'Живая Музыка и Ужин', image: Event_1, time: '25.01.2025'},
  {
    title: 'Вечерний Кулинарный Мастер-Класс',
    image: Event_2,
    time: '02.02.2025',
  },
  {title: 'Семейные Выходные', image: Event_3, time: '11.02.2025'},
  {title: 'Теннисный бранч', image: Event_4, time: '23.02.2025'},
];

const EventButton = ({title, image, onPress, index, time}) => (
  <>
    <Text style={styles.time}>{time}</Text>
    <TouchableOpacity
      style={index === 0 ? styles.buttonFirst : styles.button}
      onPress={() => onPress(image)}>
      <Text style={index === 0 ? styles.titleFirst : styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  </>
);

export default function () {
  const navigation = useNavigation();

  const handlePress = image => {
    navigation.navigate('DrawerNavigator', {
      screen: 'CasinomEventDetailScreen',
      params: {image},
    });
  };

  return (
    <View style={styles.container}>
      <CasinomHeader />

      <View style={styles.content}>
        {events.map((event, index) => (
          <EventButton
            key={index}
            index={index}
            title={event.title}
            image={event.image}
            onPress={handlePress}
            time={event.time}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.black,
  },
  button: {
    justifyContent: 'center',
    width: '75%',
    backgroundColor: COLORS.black,
    paddingVertical: 15,
    borderWidth: 2,
    borderLeftWidth: 0,
    borderColor: COLORS.main,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 23,
    fontFamily: FONTS.black,
    color: COLORS.main,
    textAlign: 'left',
    paddingLeft: 30,
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 20,
    width: width,
    marginTop: '10%',
  },
  buttonFirst: {
    justifyContent: 'center',
    width: '75%',
    backgroundColor: COLORS.main,
    paddingVertical: 15,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  titleFirst: {
    fontSize: 23,
    fontFamily: FONTS.black,
    color: COLORS.black,
    textAlign: 'left',
    paddingLeft: 30,
  },
  time: {
    marginTop: 20,
    marginBottom: 3,
    marginLeft: 30,
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.black,
  },
});
