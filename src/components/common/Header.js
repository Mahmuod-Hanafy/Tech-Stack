import React from 'react'
import{
  View,
 
  Text,
 

}from 'react-native'

export  class Header extends React.Component{
   
  render(){
    return (
    <View style={styles.container}>
    <Text style={styles.textStyle}>{this.props.headerText}</Text>
    </View>)
  }
}



const styles = {
    container:{
        backgroundColor:'#313165',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:15 ,
        shadowColor:'#000',
        shadowOffset:{width:0 , height:2},
        shadowOpacity:0.2,
       
        borderColor:'#fff'
        
        
    },
    textStyle :{
        fontSize : 20,
        color: '#fff',
        fontWeight:'bold'
        
        
    }
}