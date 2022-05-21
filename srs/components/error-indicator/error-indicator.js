import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ErrorIndicator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boom}>BOOM!</Text>
      <Text style={styles.text}>something has gone terribly wrong</Text>
      <Text style={styles.text}>(but we already sent droids to fix it)</Text>
    </View>
  );
};

export default ErrorIndicator;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  boom: {color: 'white'},
  text: {color: 'white'},
});
