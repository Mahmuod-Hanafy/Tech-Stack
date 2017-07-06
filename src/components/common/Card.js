import React from 'react'
import {View} from 'react-native'
import {CardSection} from './CardSection.js'

export class Card extends React.Component{
    
    render(){
        return(
            <View style={styles.containerStyle} >
                {this.props.children}
            </View>
        )
    }
}




const styles={
    containerStyle:{
        
        borderWidth: 2,
       
        borderColor: '#1c72ff',
        borderRadius:4,
        
        shadowColor: '#111',
        shadowOffset: {width:0 , height:2},
        shadowOpacity:0,
        shadowRadius: 4,
        marginRight: 5,
        marginLeft: 5,
        marginTop:10,
        elevation: 1,
        
    }
}