import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {AppContext} from '../components/AppContext';
import CasinomHeader from '../components/CasinomHeader';
import CasinomMenuComponent from '../components/CasinomMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {casinomProducts} from '../helpers/casinomProducts';

const categories = [
  {label: 'Закуски'},
  {label: 'Супы'},
  {label: 'Основные блюда'},
  {label: 'Десерты'},
];

const OnwSportCategoryButton = ({label, active, onPress, image}) => (
  <TouchableOpacity onPress={onPress} style={styles.categoryButton}>
    <Text style={styles.category}>{label}</Text>
  </TouchableOpacity>
);

export default function CasinomHomeScreen() {
  const [category, setCategory] = useState(0);
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);

  const handleCategoryChange = index => {
    setCategory(index);
    toggleRefresh(!shouldRefresh);
  };

  return (
    <View style={styles.container}>
      <CasinomHeader />

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <OnwSportCategoryButton
            key={index}
            label={item.label}
            active={category === index}
            onPress={() => handleCategoryChange(index)}
            image={item?.image}
          />
        ))}
      </View>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {casinomProducts[category].map((product, index) => (
          <CasinomMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width,
    marginVertical: 15,
  },
  categoryButton: {
    width: '47%',
    height: 50,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: COLORS.black,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    fontFamily: FONTS.black,
    color: COLORS.black,
    fontSize: 16,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
