import React from 'react'




class ProductSwatch extends React.Component{
    constructor(){
      super()
      this.state = {}
    }
  
    render(){
       return (
        <>
          <div class="swatch clearfix" data-option-index="0">
                    <div class="header">Size</div>
                    <div data-value="M" class="swatch-element plain m available">
                      <input id="swatch-0-m" type="radio" name="option-0" value="M" checked=""/>
                      <label for="swatch-0-m">M
                        <img class="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886"/>>
                      </label>
                    </div>
                    <div data-value="L" class="swatch-element plain l available">
                      <input id="swatch-0-l" type="radio" name="option-0" value="L"/>
                      <label for="swatch-0-l">L
                        <img class="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886"/>>
                      </label>
                    </div>
                    <div data-value="XL" class="swatch-element plain xl available">
                      <input id="swatch-0-xl" type="radio" name="option-0" value="XL"/>
                      <label for="swatch-0-xl">
                        XL
                        <img class="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886"/>>
                      </label>
                    </div>
                    <div data-value="XXL" class="swatch-element plain xxl available">
                      <input id="swatch-0-xxl" type="radio" name="option-0" value="XXL"/>
                      <label for="swatch-0-xxl">
                        XXL
                        <img class="crossed-out" src="//cdn.shopify.com/s/files/1/1047/6452/t/1/assets/soldout.png?10994296540668815886"/>>
                      </label>
                    </div>
                  </div>
        </>
    )
  }
 
}

export default ProductSwatch
 


