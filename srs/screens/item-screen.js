import React, {useMemo} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import ItemDetails from '../components/item-details/item-details';

const ItemScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const filter = route.params.filter;
  const id = route.params.id;
  const handleNavigate = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/images/background-image/stars.png')}>
        <View style={styles.contentBox}>
          <View style={styles.imageBox}>
            <Text style={styles.backgroundText}>Top Secret</Text>
            <Image
              source={{
                uri: `https://starwars-visualguide.com/assets/img/${filter}/${id}.jpg`,
              }}
              style={styles.itemImage}
            />
          </View>
          <ItemDetails filter={filter} id={id} style={styles.textFields} />
          <TouchableOpacity onPress={handleNavigate} style={styles.button}>
            <Text style={styles.textButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  contentBox: {
    marginHorizontal: 10,
    marginVertical: 50,
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  imageBox: {
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: 'black',
    paddingVertical: 10,
    justifyContent: 'center',
    position: 'relative',
    maxWidth: 350,
    maxHeight: 350,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  backgroundText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'red',
    position: 'absolute',
  },

  itemImage: {
    resizeMode: 'contain',
    width: 300,
    height: 300,
  },
  textFields: {
    flex: 1,
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  fieldTitle: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
    borderBottomWidth: 1,
  },
  field: {
    fontSize: 24,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 2,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  textButton: {
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 50,
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 20,
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
});
