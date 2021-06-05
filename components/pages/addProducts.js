import React, { useEffect } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, TextInput ,Text ,FlatList, TouchableOpacity} from "react-native";
import {database} from '../../config/config';
import styles from '../../style/addProducts';

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
    if(nameProduct != "" && valueProduct != ""){
      database.collection('produtos').add({
        nameProduct,
        valueProduct
    });
    }else{
      Alert.alert('Os campos não podem ser vazios!!');
      console.log('Os campos não podem ser vazios!!')
    }
  }
  function deleteProduct(id){
    if(id != ""){
      database.collection('produtos').doc(id).delete();
    }else{
      Alert.alert('Não foi identificado o ID do produto!!');
      console.log('Não foi identificado o ID do produto!!')
    }
  }

  function changeProduct(id){
    if(nameProduct != "" && valueProduct != ""){
      database.collection('produtos').doc(id).update(
        {
            nameProduct,
            valueProduct
        }
      );
    }else{
      Alert.alert('Os campos não podem ser vazios!!');
      console.log('Os campos não podem ser vazios!!')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro de Produtos</Text>
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
      <TouchableOpacity onPress={addProduto}>
                <Text style={styles.registerButton} >Cadastrar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Lista de Produtos</Text>
      <FlatList
          data={products}
          renderItem={({item}) => <Text>{item.nameProduct} - {item.valueProduct}
           <TouchableOpacity onPress={()=>changeProduct(item.id)}>
                <Text style={styles.changeButton} >Alterar</Text>
          </TouchableOpacity>
          <TouchableOpacity color="#E63529" onPress={()=>deleteProduct(item.id)}>
                <Text style={styles.cancelButton} >Deletar</Text>
          </TouchableOpacity>
          </Text>}
        />
    </SafeAreaView>
  );
};

export default AddProduct;