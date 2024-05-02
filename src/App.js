import './App.css';
import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



export default class App extends Component{
 pagesize=10;
 state={
  progress:5
 }
 setProgress=(progress)=>{
  this.setState({progress:progress})
 }
render(){
  return(
    <Router>
     
    <><div> <Navbar />
    <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        
      />
    </div><div className="container">
{/* <News setProgress={this.setProgress}setProgress={this.setProgress} pagesize={this.pagesize} category="technology" country="in"/> */}
<Routes>
  <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pagesize={this.pagesize} category="general" country="in"/>}/>
  <Route exact path="/entertainment"  element={<News setProgress={this.setProgress} key="entertainment" pagesize={this.pagesize} category="entertainment" country="in"/>}/>
  <Route exact path="/business"  element={<News setProgress={this.setProgress} key="business" pagesize={this.pagesize} category="business" country="in"/>}/>
  <Route exact path="/general" element={<News setProgress={this.setProgress} key="general"  pagesize={this.pagesize} category="general" country="in"/>}/>
  <Route exact path="/health"  element={<News setProgress={this.setProgress} key="health" pagesize={this.pagesize} category="health" country="in"/>}/>
  <Route exact path="/science"  element={<News setProgress={this.setProgress}key="science" pagesize={this.pagesize} category="health" country="in"/>}/>
  <Route exact path="/sports"  element={<News setProgress={this.setProgress} key="sports"pagesize={this.pagesize} category="sports" country="in"/>}/>
  <Route exact path="/technology"  element={<News setProgress={this.setProgress} key="technology"  pagesize={this.pagesize} category="technology" country="in"/>}/>
</Routes>
      </div></></Router>
   
   
  )
}
}
