import React from 'react'
// import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
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
import HotelRoomOrder from './components/hotel/HotelRoomOrder'


import AttractionsIndex from './components/AttractionComp/AttractionsIndex'
import Attractionslist from './components/AttractionComp/Attractionslist'
function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          {/* <Link to="/ticketlist">●ticketlist</Link> */}
          {/* <Link to="/coachlist">●1.coach_list</Link> */}
          {/* <Link to="/coachclass">●2.coach_class</Link>
        <Link to="/CoachBook">●3.CoachBook</Link>
        <br></br>
        <Link to="/CoachDate">●CoachDate</Link>
        <Link to="/CoachCarousels2">●CoachCarousels2</Link>
        <Link to="/area">●area</Link>
        <br></br> */}
           {/* <Link to="/AttractionsIndex">●AttractionsIndex</Link> */}
           {/* <Link to="/Attractionslist">●Attractionslist</Link> */}

          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/coachlist" component={CoachList} />
            <Route path="/coachclass/:id?" component={CoachClass} />
            <Route path="/CoachBook/:id2?" component={CoachBook} />
            <Route path="/CoachDate" component={CoachDate} />
            <Route path="/CoachCarousels2" component={CoachCarousels2} />

            <Route path="/ticketlist" component={TicketList} />
            <Route path="/ticketarea/:areaid?" component={TicketAreas} />
            <Route path="/ticketpage/:ticketid?" component={TicketPage} />

            <Route path="/cart" component={UserCart} />
            <Route path="/checkout" component={UserCheckout} />
            <Route path="/user/profile" component={UserAccount} />
            <Route path="/user/address" component={UserAddress} />
            <Route path="/user/order/:orderNo" component={UserOrderDetail} />
            <Route path="/user/order" component={UserOrder} />
            <Route path="/activeUser" component={AccountActiveResult} />

            <Route path="/product/:prodNo" component={Product} />
            <Route path="/product" component={FilterProduct} />
            <Route path="/333" component={ProductAsNavFor} />

            <Route path="/HotelHome" component={HotelHome} />
            <Route path="/HotelList" component={HotelList} />
            <Route
              path="HotelIntroductionContent/all_room/:id"
              component={HotelIntroductionContent}
            />
            <Route path="/HotelListCard" component={HotelListCard} />

            <Route path="/HotelIntroduction" component={HotelIntroduction} />
            <Route
              path="/HotelIntroductionContent"
              component={HotelIntroductionContent}
            />
            <Route path="/HotelRoomOrder" component={HotelRoomOrder} />

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
