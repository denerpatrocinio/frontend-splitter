// Integrated Assignment Mob Dev & Web Cloud 
// The login react native UI is being referenced on the follwing link : https://aboutreact.com/react-native-login-and-signup/
// The react native front end application has: Login Screen, HomeScreen, Expenses and Summary endpoints
// The backend in being coded my controller often tested using postman too
// 21/05/2021 by dener

// Making my imports
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';

const Stack = createStackNavigator();

//creting stack navigation between my login and register screens
const Auth = () => {
  
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', 
          headerStyle: {
            backgroundColor: '#191919', 
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}
      />
    </Stack.Navigator>
  );
};


//Making my splash screen navigation before my login page show up
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          
          options={{headerShown: false}}
        />
        {}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;