import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function ContactsInfo({route, navigation}): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const {name, phonenumber, image} = route?.params?.item;

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.contactInfoWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/user-profile.png')}
        />
        <View>
          <Text style={styles.label}>Name</Text>
          <Text>{name}</Text>
          <Text>Phone number</Text>
          <Text>{phonenumber}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {width: 120, height: 120, alignSelf: 'center'},
  contactInfoWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    gap: 30,
  },
  label: {
    fontSize: 12,
  },
});
export default ContactsInfo;
