// Integrated Assignment Mob Dev & Web Cloud 
// The login react native UI is being referenced on the follwing link : https://aboutreact.com/react-native-login-and-signup/
// The react native front end application has: Login Screen, HomeScreen, Expenses and Summary endpoints
// The backend in being coded my controller often tested using postman too
// 21/05/2021 by dener

// Making my imports
import React from 'react';
import {View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';




const HomeScreen = () => {
  // Calling my API controller to post an expense from a commom trip by the user
  fetch('http://localhost:8080/deners-trip/expense', {
    method: 'POST',
    body: formBody,
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

  //Creating my text input and button to let user add it
  return(
  <KeyboardAvoidingView>

    <View style={styles.SectionStyle}>
      <TextInput
        style={styles.inputStyle}          
      placeholder="Enter your trip name" 
      autoCorrect={false}
      onChangeText={()=> {}}
      />

      <TextInput
          style={styles.inputStyle}            
        placeholder="Enter your expense"
        autoCorrect={false}
        onChangeText={()=> {}}
        />
      
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>
          Add!
        </Text>
      </TouchableOpacity>
      

                


    </View>

    </KeyboardAvoidingView>
  );
  



  
};


export default HomeScreen;