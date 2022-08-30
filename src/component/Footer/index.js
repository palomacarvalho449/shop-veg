import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Vegs from '../Vegs';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Vegs img={require('../../assets/1.png')} cost="11,00">
                    img 1   
                </Vegs>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Vegs img={require('../../assets/5.png')} cost="15,00">
                    img 5 
                </Vegs>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Vegs img={require('../../assets/3.png')} cost="10,00">
                    img 3 
                </Vegs>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})