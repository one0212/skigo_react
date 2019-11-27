import React from 'react'
import {
    Breadcrumb
  } from 'react-bootstrap'



class breadcrumb extends React.Component{
    constructor(){
      super()
      this.state = {}
    }
  
    render(){
       return (
        <>
        <Breadcrumb>
                <Breadcrumb.Item href="/">首頁</Breadcrumb.Item>
                <Breadcrumb.Item href="/store">Store</Breadcrumb.Item>
                <Breadcrumb.Item >商品詳細頁</Breadcrumb.Item>
        </Breadcrumb>
        </>
    )
  }
 
}

export default breadcrumb
 


