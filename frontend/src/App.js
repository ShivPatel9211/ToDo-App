
import './App.css';
import React, { Component } from 'react';
import List from './List';
import axios from 'axios';

const ai = axios.create({
  baseURL:'https://todonp.herokuapp.com/api'
})

class App extends Component {
 state ={
    list : [],
    text :""
}
handleradd = e =>{
    this.setState({text:e.target.value})
   
}
showlist =()=>{
  ai.get('/show')
  .then((res)=>{
    this.setState({list:res.data})
  })
}
addlist = (data)=>{
  if(this.state.text !==""){
    ai.post('/create',data)
    .then((res)=>{
    this.setState({text:""})
    this.showlist()
    })
  }
 
}
datadelete = id =>{
 console.log("deleted")
 ai.delete(`/delete/${id}`)
 .then((res)=>{
   this.showlist()
 })
}

add = e =>{
  let data = {name:this.state.text}
  this.addlist(data)
  }

  componentDidMount(){
    this.showlist()
  }
  render() {
    return (
      // <div id="container">
      //   <h1>To do list</h1>
      //   <input type="text" id="task" placeholder="add a new task" value={this.state.text}  onChange={this.handleradd}/>
      //   <button id="task-button" onClick={this.add}>+</button>
      //   <div id="list-container">
      //    {
      //      this.state.list.map((value ,id)=>{
      //       return <List
      //         value={value.name} key={id} id={value.id} func ={this.datadelete}
      //       />
      //      })
      //    }
      //   </div>
      // </div>
   <div class="container">
  <div class="to-do">
    <h2>To-Do List <span id="count"></span></h2>
    <div class="input">
      <input type="text" id="title" autocomplete="off" placeholder='Write your plan' value={this.state.text} onChange={this.handleradd}/>
      <button id="add-task" onClick={this.add}>
        Add Task
      </button>
    </div>
    <div class="task">
      <ul id="task-list"> 
         {
           this.state.list.map((value ,id)=>{
            return <List
             value={value.name} key={id} id={value.id} func ={this.datadelete}
           />
           })
        }
      </ul>  
    </div>
    
  </div> 
</div>

    );
  }
}

export default App;
