import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login/';
import Cadastro from './src/pages/Cadastro/';
import List from './src/pages/List/';
import Cart from './src/pages/Cart';
import Request from './src/pages/Request';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            title:'Login',
            headerStyle: {
              backgroundColor: 'gray'
            },
          }} 
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro}
          options={{
            title:'Cadastro',
            headerStyle: {
              backgroundColor: 'gray'
            },
          }} 
        />
        <Stack.Screen 
          name="List" 
          component={List}
          options={{
            title:'Listagem',
            headerStyle: {
              backgroundColor: 'gray'
            },
          }} 
        />
        <Stack.Screen 
          name="Cart" 
          component={Cart}
          options={{
            title:'Carrinho',
            headerStyle: {
              backgroundColor: 'gray'
            },
          }} 
        />
        <Stack.Screen 
          name="Request" 
          component={Request}
          options={{
            title:'Pedido',
            headerStyle: {
              backgroundColor: 'gray'
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;