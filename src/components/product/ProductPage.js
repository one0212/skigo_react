import React from 'react';
import './Pg'

const ProductPage = () => {
    return(
        <>
         <div className="container">
            <div className="row">
            <nav aria-label="breadcrumb" className="col-lg-12">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Store</a></li>
                <li className="breadcrumb-item"><a href="#">滑雪板</a></li>
                <li className="breadcrumb-item active" aria-current="page">商品</li>
                </ol>
            </nav>
            </div>
            <div className="row ">
            <div className="col-lg-8">
                <div className=" m-auto"></div>
            </div>
            <div className="col-lg-4 ">
                <div className="product-main-info">
                <div className="product-title">
                    <h2 className="">ALL MOUNTAIN SNOWBOARD</h2>
                    <h1 className="product-name">Men's Burton Custom Camber Snowboard</h1>
                </div>
                <div className="product-price d-flex align-items-end">
                    <span className="price_c pr-2 ">NT</span><span className="price_n ">1,280</span>
                        <div className=" ml-5 ">
                            <label htmlFor="Select2">數量</label>
                                <select className="" id="Select2" style={{"width": "100px"}}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </select>
                        </div>
                </div>
                <div className="form-group">
                    <input type="radio" name="size" id="A"/>
                    <label className="size-btn btn btn-outline-dark" htmlFor="A">150</label>
                    <input type="radio" name="size" id="B"/>
                    <label className="size-btn btn btn-outline-dark" htmlFor="B">154</label>
                    <input type="radio" name="size" id="C"/>
                    <label className="size-btn btn btn-outline-dark" htmlFor="C">156</label>
                    <input type="radio" name="size" id="D"/>
                    <label className="size-btn btn btn-outline-dark" htmlFor="D">158</label>
                    <input type="radio" name="size" id="E"/>
                    <label className="size-btn btn btn-outline-dark" htmlFor="E">162</label>
                    </div>
                
                <div className="form-group">
                    <label htmlFor="Select2">數量</label>
                    <select className="" id="Select2" style={{"width": "150px"}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-red-orange  btn-block"><i className="fas fa-shopping-cart"></i>放入購物車</button>
                    <button className="btn btn-light btn-block" id="favorite-button"><i className="fas fa-heart active"></i>收藏商品</button>
                </div>
                <ul className="product-note">
                    <li>付款後，從開始製作到寄出商品為3個工作天。不包含假日</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </>

    )
}

export default ProductPage;