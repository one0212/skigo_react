import React from 'react'

const Example = () => {
  const handleClick = () => {
    const url = 'http://localhost:3001/api/cart/items'
    const id = document.querySelector('#product-id').textContent
    const select = document.querySelector('#product-select')
    const selectedValue = select.options[select.selectedIndex].value
    const obj = {
      // prodId, prodType, qty 這三個變數不可改
      prodId: parseInt(1), //這邊放資料庫的商品id
      prodType: 'products', //這邊放資料庫的商品類型 例如飯店傳hotel,
      qty: parseInt(1), //商品數量 不需用字串
    }
    console.log(id, selectedValue, obj)
    fetch(url, {
      body: JSON.stringify(obj),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    }).then(response => {
      // 如果response.status拿到200表示加入商品成功
      if (response.status === 200) {
        // 所以可以用此判斷, 後續要做的事情就是放這邊
        console.log('商品加入成功')
      }
    })
  }
  return (
    <>
      <div>雪具1</div>
      {/* 商品id會藏起來  -- 但也許有更好的做法 */}
      <div id="product-id" style={{ display: 'none' }}>
        123456
      </div>
      <select id="product-select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleClick}>area</button>
      {/* 此按鈕為加入購物車 */}
    </>
  )
}

export default Example
