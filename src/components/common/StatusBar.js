import React from 'react'
import {View} from'react-native'

export  class Status extends React.Component{
    render(){
        return (<View style={style.statusStyle} />)
    }
}


const style ={
     statusStyle:{
    backgroundColor:'#1b1b1b',
    height:18
  }
}