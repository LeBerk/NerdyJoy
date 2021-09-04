import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Setting ({ navigation }) {
    return (
    <View style={styles.container}>
       <Text>Setting Home</Text>
    </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
