import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Login({ navigation}){
  return  (
    <KeyboardAvoidingView style={styles.background}>
        <View>
            <Text style={styles.fazentech}>FazenTech</Text>
            <Image style={styles.celeiro}
            source={require('../../images/fazenda.png')}
            />
        </View>

        <View style={styles.container}>
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
        </View>

        <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('List')}>
            <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.registerText}>Criar conta gratuita</Text>
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

    fazentech:{
        fontSize: 80,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 100,
        marginTop: -10,
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },

    celeiro:{
        marginBottom: 40,
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
        backgroundColor: '#35AAFF',
        width: '81%',
        height: 45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 7,
    },

    submitText:{
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    btnRegister:{
        marginTop: 10,
    },

     registerText:{
        color: '#FFF',
    },

})