import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Cadastro({ navigation}){
    return  (
      <KeyboardAvoidingView style={styles.background}>
         
          <View style={styles.container}>
              <TextInput
                  style={styles.input}
                  placeholder="Seu nome"
                  autoCorrectr={false}
                  onChangeText={()=> {}}
              />
              <TextInput
                  style={styles.input}
                  placeholder="CPF"
                  autoCorrectr={false}
                  onChangeText={()=> {}}
              />
               <TextInput
                  style={styles.input}
                  placeholder="Celular"
                  autoCorrectr={false}
                  onChangeText={()=> {}}
              />
               <TextInput
                  style={styles.input}
                  placeholder="Email"
                  autoCorrectr={false}
                  onChangeText={()=> {}}
              />
               <TextInput
                  style={styles.input}
                  placeholder="Senha"
                  autoCorrectr={false}
                  onChangeText={()=> {}}
              />
               <TextInput
                  style={styles.input}
                  placeholder="Repita sua senha"
                  autoCorrectr={false}
                  onChangeText={()=> {}}
              />
          </View>

        <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.submitText}>Criar conta gratuita</Text>
        </TouchableOpacity>
  
      </KeyboardAvoidingView>
    )
  };
  
  const styles = StyleSheet.create({
      background:{
          resizeMode: 'cover',
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          backgroundColor:'gray',
      },
  
      container:{
          textAlign: 'center',
          alignItems:'center',
          justifyContent:'center',
          width: '90%',
      },
  
      input:{
        backgroundColor: 'white',
        width: '90%',
        color: '#222',
        fontSize: 17,
        marginBottom: 15,
        borderRadius: 7,
        padding: 10,

    },

    btnSubmit:{
        backgroundColor: 'green',
        width: '81%',
        height: 45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 7,
        marginTop: 80
    },

    submitText:{
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
  })