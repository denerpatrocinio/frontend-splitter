// Integrated Assignment Mob Dev & Web Cloud 
// The login react native UI is being referenced on the follwing link : https://aboutreact.com/react-native-login-and-signup/
// The react native front end application has: Login Screen, HomeScreen, Expenses and Summary endpoints
// The backend in being coded my controller often tested using postman too
// 21/05/2021 by dener

// Making my imports
import React from 'react';
import {View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';





const Sumarry = () => {
//Calling my API controller to sumarize my expenses
fetch('http://localhost:8080/deners-summary', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

}