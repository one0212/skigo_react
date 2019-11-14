import React from 'react';
// import TodoApp from './component/todo/TodoApp';
// import BootstrapTest from './component/bootstrap/BootstrapTest';
// import BootstrapBR from './component/bootstrap/BootstrapBR';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import CoachList from './coach/CoachList';
import CoachClass from './coach/CoachClass';
import CoachBook from './coach/CoachBook';
import CoachDate from './coach/CoachDate'
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';

import Comment from './components/goods/Comment';
import Areas from './area/Areas';


function App() {
  return (
    <Router>
    <>
      
      <Link to="/coachlist">●1.coach_list</Link>
      <Link to="/coachclass">●2.coach_class</Link>
      <Link to="/CoachBook">●3.CoachBook</Link> 
      <Link to="/CoachDate">●CoachDate</Link>   
      <Link to="/comment">●comment</Link><br/>
      <Link to="/area">●area</Link>

        <Switch>
            
            <Route path="/coachlist" component={CoachList} />
            <Route path="/coachclass" component={CoachClass} />
            <Route path="/CoachBook" component={CoachBook} />
            <Route path="/CoachDate" component={CoachDate} />
            <Route path="/comment" component={Comment} />
            <Route path="/area" component={Areas} />
        </Switch>
    </>
    </Router>
  );
}

export default App;


