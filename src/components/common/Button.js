import React from 'react'
import {Text,TouchableOpacity} from 'react-native'

export  class Button extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress} >
                <Text style={styles.textStyle} >{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles={
    buttonStyle:{
        flex:1,
        backgroundColor:'#1c72ff',
        borderRadius:7,
        alignSelf:'center',
        marginRight:5,
        marginLeft:5,
        shadowColor:'#000',
        
       
    },
    textStyle:{
        color:'#fff',
        alignSelf:'center',
        paddingTop:12,
        paddingBottom:12,
        fontSize:18,
        fontWeight:'600'
    }
}