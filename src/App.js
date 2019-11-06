import React from 'react';
// import TodoApp from './component/todo/TodoApp';
// import BootstrapTest from './component/bootstrap/BootstrapTest';
// import BootstrapBR from './component/bootstrap/BootstrapBR';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import CoachList from './coach/CoachList'
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    <>
      <Link to="/">首頁</Link>
      <Link to="/news">新聞</Link>
      <Link to="/contact">聯絡</Link>
      <Link to="/coachlist">coach</Link>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
            <Route path="/coachlist" component={CoachList} />
        </Switch>
    </>
    </Router>
  );
}

export default App;


