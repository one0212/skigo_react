import React from 'react'
// import TodoApp from './component/todo/TodoApp';
// import BootstrapTest from './component/bootstrap/BootstrapTest';
// import BootstrapBR from './component/bootstrap/BootstrapBR';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CoachList from './coach/CoachList'
import CoachClass from './coach/CoachClass'
import CoachBook from './coach/CoachBook'
import CoachDate from './coach/CoachDate'
import CoachCarousels2 from './coach/CoachCarousels2'

import UserCart from './components/user/cart/UserCart'
import UserAccount from './components/user/account/UserAccount'
import UserAddress from './components/user/address/UserAddress'

import Comment from './components/goods/Comment'
import Areas from './components/area/Areas'

function App() {
  return (
    <Router>
      <>
        <Link to="/coachlist">●1.coach_list</Link>
        <Link to="/coachclass">●2.coach_class</Link>
        <Link to="/CoachBook">●3.CoachBook</Link>
        <br></br>
        <Link to="/CoachDate">●CoachDate</Link>
        <Link to="/CoachCarousels2">●CoachCarousels2</Link>
        <Link to="/area">●area</Link>
        <br></br>

        <Switch>
          <Route path="/coachlist" component={CoachList} />
          <Route path="/coachclass" component={CoachClass} />
          <Route path="/CoachBook" component={CoachBook} />
          <Route path="/CoachDate" component={CoachDate} />
          <Route path="/CoachCarousels2" component={CoachCarousels2} />
          <Route path="/area" component={Areas} />

          <Route path="/cart" component={UserCart} />
          <Route path="/member/profile" component={UserAccount} />
          <Route path="/member/address" component={UserAddress} />
        </Switch>
      </>
    </Router>
  )
}

export default App
