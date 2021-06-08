import React from 'react';
import { View } from 'react-native';
import AddProducts from './components/pages/addProducts'
import Header from './components/pages/header'
function Index() {
  return (
  <View>
    <Header />
    <AddProducts />
  </View>);
  
}

export default Index;