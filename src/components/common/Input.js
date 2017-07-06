import React from 'react'
import {Text,TextInput,View} from 'react-native'


export const Input = ( {lable, value, onChangeText,placeholder,secureTextEntry} )=>{
    return(
        <View style={styles.container}>
            <Text style={styles.lableStyle} >{lable}</Text>
            <View style={styles.inputContainerStyle}>
            <TextInput
            secureTextEntry={secureTextEntry}
            autoCorrect={false}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={styles.inputStyle}
             />
             <View style={styles.line} />
             </View>
        </View>
    )
}


const styles={
    inputStyle:{
        color:'#000',
         flex:1,
        fontSize:18,
        backgroundColor:'#9992',
       borderRadius:2
          
    },
    inputContainerStyle:{
        flex:3,
        marginRight:5,
        marginLeft:5,
         borderColor:'#aeaeae',
         
      
        height:38,
        
        
    },
    line:{
        backgroundColor:'#1c72ffdf',
        height:2,
        borderRadius:5
    },
    lableStyle:{
        fontSize:18,
        paddingLeft:5,
        flex:1

    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        height:40,
        flex:1,
       

    }
}