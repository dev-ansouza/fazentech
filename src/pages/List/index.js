import React from 'react';
import { Component } from 'react';
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export default class List extends Component{

  render() {

    const dados = [
      {key: 'Banana', price: 'R$ 1,99 / Kg', image: 'https://feiradoceasa.com.br/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/b/a/banana-nanica-1kg_6_2.jpg'},
      {key: 'Mamão', price: 'R$ 1,99 / Kg', image: 'https://www.mambo.com.br/ccstore/v1/images/?source=/file/v4925567681571308600/products/131556.jpg&height=400&width=400'},
      {key: 'Laranja ', price: 'R$ 1,99 / Kg', image: 'https://d26lpennugtm8s.cloudfront.net/stores/746/397/products/laranja_ceu1-53852a66aa8037bd7415221636647098-1024-1024.jpg'},
      {key: 'Leite     ', price: 'R$ 1,99 / Kg', image: 'https://radiosimpatia.com.br/images/2014/06/leite-emagrece.jpg'},
      {key: 'Alface   ', price: 'R$ 1,99 / Kg', image: 'https://lh3.googleusercontent.com/proxy/oFqQW_5unSigJWPEOv5mySHdVZLM6M0ZTW32AaPowdmH5L9L3PU7-7vmJtA5txUEUJ3xjpKzB4yaOEWWteoMKqsRjkEYp2J_4df6s9eXnEZ77avS'},
      {key: 'Tomate ', price: 'R$ 1,99 / Kg', image: 'https://static1.squarespace.com/static/5b8edfa12714e508f756f481/5bb7d929a4222f8b31418ae5/5bbcf80015fcc00ead6882ba/1544815130008/?format=1500w'},
      {key: 'Manga  ', price: 'R$ 1,99 / Kg', image: 'https://static3.tcdn.com.br/img/img_prod/350075/muda_de_manga_tommy_feita_por_enxerto_5067_2_20190521161350.jpg'},
    ]

    return (
      <View style={styles.container}>

          <View style={{ alignItems:'center',justifyContent:'center', marginBottom: 3, borderBottomColor: 'gray', borderBottomWidth: 1}}>
            <Text style={{fontSize: 30, margin: 10}}>Selecione a quantidade desejada de cada item:</Text>
          </View>

          <FlatList 
              data={dados}
              renderItem= {( {item}) => 
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 3, borderBottomColor: 'gray', borderBottomWidth: 1}}>
                  <Image source={{uri: item.image}} style={{width: 80, height: 80, margin: 5}}/>
                  <View style={{flex: 1, flexDirection: 'row', marginBottom: 3, width: '100%'}}>
                    <Text style={{fontSize: 18, marginTop: 30, marginLeft: 10}}>
                      {item.key}
                    </Text>   
                    <Text style={{fontSize: 18, marginTop: 30, marginLeft: 30, color: 'red'}}>{item.price}</Text>
                  </View>
                </View>
              }          
          />

          <View style={{ alignItems:'center',justifyContent:'center', marginBottom: 3, borderTopColor: 'gray', borderTopWidth: 1}}>
            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.submitText}>Adicionar itens ao carrinho</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
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