import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({ navigation }: any) => {
   return (
      <View>
         <Text>Welcome</Text>
         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View>
               <Text>Go to Create Account</Text>
            </View>
         </TouchableOpacity>
      </View>
   );
};

export default Home;
