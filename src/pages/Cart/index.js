import React from 'react';
import { Component } from 'react';
import { View, FlatList, StyleSheet, Image, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function Cart( {navigation} ) {

  const dados = [
    {key: 'Banana', price: 'R$ 1,99 / Und.', quantity: 17, image: 'https://feiradoceasa.com.br/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/b/a/banana-nanica-1kg_6_2.jpg'},
    {key: 'Mamão', price: 'R$ 1,99 / Und.',quantity: 3,  image: 'https://www.mambo.com.br/ccstore/v1/images/?source=/file/v4925567681571308600/products/131556.jpg&height=400&width=400'},
    {key: 'Laranja ', price: 'R$ 1,99 / Und.',quantity: 12,  image: 'https://d26lpennugtm8s.cloudfront.net/stores/746/397/products/laranja_ceu1-53852a66aa8037bd7415221636647098-1024-1024.jpg'},
  ]

  return (
      
    <View style={styles.container}>

        {/* <View style={{ alignItems:'center',justifyContent:'center', marginBottom: 3, borderBottomColor: 'gray', borderBottomWidth: 1}}>
          <Text style={{fontSize: 30, margin: 10}}>Selecione a quantidade desejada de cada item:</Text>
        </View> */}

        <FlatList 
            data={dados}
            renderItem= {( {item, index}) => 
              <View style={{flex: 1, flexDirection: 'row', marginBottom: 3, borderBottomColor: 'gray', borderBottomWidth: 1}}>
                <Image source={{uri: item.image}} style={{width: 80, height: 80, margin: 5}}/>
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 3, width: '100%'}}>
                  <Text style={{fontSize: 18, marginTop: 30, marginLeft: 10}}>
                    {item.key}
                  </Text>   
                  <Text style={{fontSize: 18, marginTop: 30, marginLeft: 30, color: 'red'}}>{item.price}</Text>
                  <Text style={{fontSize: 18, marginTop: 30, marginLeft: 30, color: 'green'}}>{item.quantity} itens</Text>
                </View>
              </View>
            }          
        />

        <View style={{ backgroundColor: 'green', alignItems:'center',justifyContent:'center', borderBottomColor: 'green', borderBottomWidth: 1}}>
          <Text style={{fontSize: 50, marginTop: 30, marginBottom: 30, color: 'white'}}>Total: R$ 63,68</Text>
        </View>

        <View style={{ alignItems:'center',justifyContent:'center', marginBottom: 3, borderTopColor: 'white', borderTopWidth: 1}}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('List')}>
            <Text style={styles.submitText}>Enviar pedido</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btnSubmit:{
    backgroundColor: 'green',
    width: '100%',
    height: 70,
    alignItems:'center',
    justifyContent:'center',
    marginBottom: -10,
  },
  submitText:{
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
  },
});