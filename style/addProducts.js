import React from 'react';
import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    title :{
      fontSize:30,
      textAlign:'center'
    },
    input: {
      height: 40,
      margin: 15,
      borderBottomWidth:1,
      padding:15,
      borderRadius:10
    },
    container:{
      marginTop:50,
      textAlign:'center'
    },
    registerButton:{
      height: 40,
      margin: 15,
      padding:10,
      borderRadius:10,
      backgroundColor:'#40C2FF',
      color:'white'
    },
    changeButton:{
      height: 40,
      margin: 15,
      padding:10,
      borderRadius:10,
      color:'#40C2FF',
    },
    cancelButton:{
      marginLeft:10,
      borderRadius:50,
      borderRadius:10
    },
    list:{
      margin:10,
      textAlign:'center'
    }
  });

  export default styles;