import React, { useEffect } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, TextInput ,Text} from "react-native";
import {database} from '../../config/config'

const AddProduct = () => {
  const [nameProduct, onChangeNameProduct] = React.useState('');
  const [valueProduct, onChangeValueProduct] = React.useState('');
  const [products , setProducts] = React.useState([]);

  useEffect(()=>{
    database.collection('produtos').onSnapshot((query)=>{
        const list = [];
        query.forEach((doc) => {
            list.push({ ...doc.data(),id:doc.id});
        });
        setProducts(list);
    })
  });

  function addProduto(){
      database.collection('produtos').add({
          nameProduct,
          valueProduct
      });
  }
  return (
    <SafeAreaView style={styles.marginTop}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNameProduct}
        value={nameProduct}
        placeholder="Nome do produto"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeValueProduct}
        value={valueProduct}
        placeholder="Valor"
        keyboardType="numeric"
      />
      <Button title="Sent" onPress={addProduto}></Button>
      {products.map((prod) => {
          return <Text key={prod.id}>{prod.nameProduct} - {prod.valueProduct}</Text>
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  marginTop:{
    marginTop:250
  }
});

export default AddProduct;