import React , { useState, useEffect }  from 'react';


function FilterSortWeb() {

  return (
    <>
      <div className="row coach-rwd-active">
            <div className="col-3">
                    <button id="menu_active" className="btn coach-btn-active"><i  className="fas fa-list"></i> 顯示篩選列</button>
            </div>
            <div className="coach-arrange col-9 d-flex justify-content-between">
                    <a href="#">熱門商品</a>
                    <a href="#">價格 ： 從高到低</a>
                    <a href="#">價格 ： 從低到高</a>
                    <span className="coach-item-num">10項目</span>
            </div>
      </div>
    </>
  )
}


export default FilterSortWeb