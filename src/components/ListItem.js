import React from 'react'
import {Text,View,TouchableOpacity,LayoutAnimation} from 'react-native'
import {CardSection} from './common'
import * as actions from '../actions'
import {connect} from 'react-redux'



 class ListItem extends React.Component{

     componentWillUpdate(){
         LayoutAnimation.linear()
     }

    renderDescription(){
        const {library,expanded} = this.props
        if (expanded)
        {
            return (
                <CardSection >
                    <Text style={{padding:5}}>
                        {library.description}
                    </Text>
                </CardSection>
            )
        }



    }

    render(){
    const { textStyle }=styles;
    const {title,id}=this.props.library
        return (
            <View>
            <TouchableOpacity
             onPress={()=>this.props.SelectLibrary(id)} >
                <CardSection>
                    <Text style={textStyle} >{title}</Text>
                </CardSection>
                {this.renderDescription()}
            </TouchableOpacity>
            </View>
        )
    }
}


const styles={
    textStyle:{
        color:'#313165',
        fontSize:18,
        paddingLeft:15
    },
    disctiption:{
        paddingLeft:15,
        paddingRight:15
    }
}

const mapStateToProps= (state,ownProps) =>{
    const expanded = state.selectedLibraryID === ownProps.library.id
    return { expanded }
}

export default connect(mapStateToProps,actions)(ListItem)
