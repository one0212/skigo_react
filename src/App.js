import React from 'react';
// import TodoApp from './component/todo/TodoApp';
// import BootstrapTest from './component/bootstrap/BootstrapTest';
// import BootstrapBR from './component/bootstrap/BootstrapBR';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import CoachList from './coach/CoachList'
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import Carousels from './card_carousels/Carousels';
import Comment from './comment/Comment';
import Areas from './area/Areas';

function App() {
  return (
    <Router>
    <>
      <Link to="/">首頁</Link>
      <Link to="/news">新聞</Link>
      <Link to="/contact">聯絡</Link>
      <Link to="/coachlist">coach</Link>
      <Link to="/carousels">carousels</Link>
      <Link to="/comment">comment</Link>
      <Link to="/area">area</Link>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
            <Route path="/coachlist" component={CoachList} />
            <Route path="/carousels" component={Carousels} />
            <Route path="/comment" component={Comment} />
            <Route path="/area" component={Areas} />
        </Switch>
    </>
    </Router>
  );
}

export default App;


