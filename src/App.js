import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Example from './components/Example'

import Header from './components/navbar/Header'
import home from './components/home/Home'
import Footer from './components/Footer'

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

import TicketList from './components/area/TicketList'
import TicketAreas from './components/area/TicketAreas'
import TicketPage from './components/area/TicketPage'

import Product from './components/product/Product'
import FilterProduct from './components/product/FilterProduct'

import ProductAsNavFor from './components/product/ProductAsNavFor'

import HotelHome from './components/hotel/HotelHome'
import HotelList from './components/hotel/HotelList'
import HotelListCard from './components/hotel/HotelListCard'

import HotelIntroduction from './components/hotel/HotelIntroduction'
import HotelIntroductionContent from './components/hotel/HotelIntroductionContent'
import HotelRoomContent from './components/hotel/HotelRoomContent'
import HotelRoomOrder from './components/hotel/HotelRoomOrder'


import AttractionsIndex from './components/AttractionComp/AttractionsIndex'
import Attractionslist from './components/AttractionComp/Attractionslist'

function App() {
  const [cartItemQty, setCartItemQty] = useState(0)

  const handleCartItemQtyChange = () => {
    setCartItemQty(cartItemQty + 1)
    console.log(cartItemQty)
  }

  console.log(`App.js Init - ${cartItemQty}`)
  return (
    <>
      <Router>
        <>
          <Header cartItemQty={cartItemQty} />

          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/coachlist" component={CoachList} />
            <Route path="/coachclass/:id?" component={CoachClass} />
            <Route
              path="/CoachBook/:id2?"
              render={props => (
                <CoachBook
                  {...props}
                  handleCartItemQtyChange={handleCartItemQtyChange}
                />
              )}
            />
            <Route path="/CoachDate" component={CoachDate} />
            <Route path="/CoachCarousels2" component={CoachCarousels2} />

            <Route path="/ticketlist" component={TicketList} />
            <Route path="/ticketarea/:areaid?" component={TicketAreas} />
            <Route
              path="/ticketpage/:ticketid?"
              render={props => (
                <TicketPage
                  {...props}
                  handleCartItemQtyChange={handleCartItemQtyChange}
                />
              )}
            />

            <Route path="/cart" component={UserCart} />
            <Route path="/checkout" component={UserCheckout} />
            <Route path="/user/profile" component={UserAccount} />
            <Route path="/user/address" component={UserAddress} />
            <Route path="/user/order/:orderNo" component={UserOrderDetail} />
            <Route path="/user/order" component={UserOrder} />
            <Route path="/activeUser" component={AccountActiveResult} />

            <Route
              path="/product/:prodNo"
              render={props => (
                <Product
                  {...props}
                  handleCartItemQtyChange={handleCartItemQtyChange}
                />
              )}
            />
            <Route path="/product" component={FilterProduct} />
            <Route path="/333" component={ProductAsNavFor} />

            <Route path="/HotelHome" component={HotelHome} />
            <Route path="/HotelList？region=北海道" component={HotelList} />

            <Route
              path="/HotelIntroductionContent/all_room/:id"
              component={HotelIntroductionContent}
            />
            <Route path="/HotelListCard" component={HotelListCard} />

            <Route path="/HotelRoomContent" component={HotelRoomContent} />

            <Route path="/HotelIntroduction" component={HotelIntroduction} />

            <Route
              path="/HotelRoomContent/roomInt/:id"
              component={HotelRoomContent}
            />
            <Route
              path="/HotelRoomOrder"
              render={props => (
                <HotelRoomOrder
                  {...props}
                  handleCartItemQtyChange={handleCartItemQtyChange}
                />
              )}
            />

            <Route path="/AttractionsIndex" component={AttractionsIndex} />
            <Route path="/Attractionslist" component={Attractionslist} />

            <Route path="/example" component={Example} />
          </Switch>
          <Footer />
        </>
      </Router>
    </>
  )
}

export default App
