import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';

import Vegs from '../../component/Vegs';

export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.text}>VERDURAS</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>ORGANICO</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LISTA</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Vegs img={require('../../assets/1.png')} cost="R$14,90" onClick={()=> navigation.navigate('Detail') }>
            Alface
          </Vegs>
          <Vegs img={require('../../assets/2.png')} cost="R$28,90" onClick={()=> navigation.navigate('Detail') }>
            Brocolis
          </Vegs>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Vegs img={require('../../assets/3.png')} cost="R$16,90" onClick={()=> alert('CLICOU')}>
            Couve
          </Vegs>
          <Vegs img={require('../../assets/4.png')} cost="R$22,00" onClick={()=> alert('CLICOU')}>
          Coentro
          </Vegs>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Vegs img={require('../../assets/5.png')} cost="R$12,90" onClick={()=> alert('CLICOU')}>
            Repolho
          </Vegs>
          <Vegs img={require('../../assets/6.png')} cost="R$9,20" onClick={()=> alert('CLICOU')}>
            Cebolinha
          </Vegs>
        </View>

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});