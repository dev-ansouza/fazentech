import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Request( {navigation} ) {
    return (
        <View style={styles.Container}>
            <View style={ {alignItems: 'center', justifyContent: 'center', marginTop: '60%'} }>
                <Text style={{fontSize: 20, color: 'white'}}>Seu pedido foi realizado !</Text>
                <Text style={{fontSize: 20, color: 'white'}}>Verifique seu email para mais detalhes.</Text>
            </View>

            <View style={{ alignItems:'center',justifyContent:'center', marginBottom: 3}}>
                <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('List')}>
                    <Text style={styles.submitText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'green',
        height: '100%',
    },
    btnSubmit:{
        backgroundColor: 'white',
        width: '81%',
        height: 45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 7,
        marginTop: 150,
    },
    submitText:{
        fontSize: 17,
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});