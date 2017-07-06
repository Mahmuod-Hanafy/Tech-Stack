import React from 'react'
import {View} from 'react-native'


export class CardSection extends React.Component{

    render(){
        return(
            <View style={styles.containerStyle}>
                {this.props.children}

            </View>
        )
    }

}


const styles={
    containerStyle:{
        
        padding:5,
        borderBottomWidth:1,
        borderColor:'#31316544',
        justifyContent:'flex-start',
        flexDirection:'row',
        position:'relative'
    }
}