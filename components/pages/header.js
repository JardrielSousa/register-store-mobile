import React from 'react';
import { View , Text ,StyleSheet} from 'react-native';
 
function Header() {
  return (
  <View>
    <Text style={styles.title}>Register Store</Text>
  </View>);
  
}
const styles = StyleSheet.create({
    title :{
        fontSize:30,
        textAlign:'center',
        backgroundColor:'#40C2FF',
        padding:20,
        color:'white'
      }
});
export default Header;