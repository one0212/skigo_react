import React from 'react'
// import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Example from './components/Example'

import Header from './components/navbar/Header'
import home from './components/home/Home'

import CoachList from './coach/CoachList'
import CoachClass from './coach/CoachClass'
import CoachBook from './coach/CoachBook'
import CoachDate from './coach/CoachDate'
import CoachCarousels2 from './coach/CoachCarousels2'

import UserCart from './components/user/cart/UserCart'
import UserCheckout from './components/user/checkout/UserCheckout'
import UserAccount from './components/user/account/UserAccount'
import UserAddress from './components/user/address/UserAddress'
import UserOrder from './components/user/order/UserOrder'
import AccountActiveResult from './components/visitor/AccountActiveResult'
import UserOrderDetail from './components/user/order/detail/UserOrderDetail'

import Areas from './components/area/Areas'
import Product from './components/product/Product'

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          {/* <Link to="/coachlist">●1.coach_list</Link> */}
          {/* <Link to="/coachclass">●2.coach_class</Link>
        <Link to="/CoachBook">●3.CoachBook</Link>
        <br></br>
        <Link to="/CoachDate">●CoachDate</Link>
        <Link to="/CoachCarousels2">●CoachCarousels2</Link>
        <Link to="/area">●area</Link>
        <br></br> */}

          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/coachlist" component={CoachList} />
            <Route path="/coachclass/:id?" component={CoachClass} />
            <Route path="/CoachBook/:id2?" component={CoachBook} />
            <Route path="/CoachDate" component={CoachDate} />
            <Route path="/CoachCarousels2" component={CoachCarousels2} />
            <Route path="/area" component={Areas} />

            <Route path="/cart" component={UserCart} />
            <Route path="/checkout" component={UserCheckout} />
            <Route path="/user/profile" component={UserAccount} />
            <Route path="/user/address" component={UserAddress} />
            <Route path="/user/order" component={UserOrder} />
            <Route path="/orderdetail" component={UserOrderDetail} />
            <Route path="/activeUser" component={AccountActiveResult} />

            <Route path="/product" component={Product} />

            <Route path="/example" component={Example} />
          </Switch>
        </>
      </Router>
    </>
  )
}

export default App
