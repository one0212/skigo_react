import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';

class ProductShare extends React.Component{
    constructor(){
      super()
      this.state = {}
    }
  
    render(){
       return (
        <>
        <div className="share-product">
        <p>分享</p>
          <a href="https://www.facebook.com/"><FaFacebookF/></a>
          <a href="https://twitter.com/?lang=zh-tw"><FaTwitter/></a>
          <a href="https://www.instagram.com/?hl=zh-tw"><FaInstagram/></a>
        </div>
        </>
    )
  }
 
}

export default ProductShare
 


