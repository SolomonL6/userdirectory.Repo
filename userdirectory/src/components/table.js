import React,{Component} from "react";
import Tablerows from "./tablerows";
import API from "../utils/index";

class Table extends Component {
    state = {
        users:[],
        newusers:[],
        isfiltered:false
    }
   
    componentDidMount() {
     this.getUsers()
    }
   async getUsers(){
            const users = await API.Users()
            console.log (users)
        }

    render(){
    return (
        <div>Table<Tablerows /></div>
    
      
    );    
    }
    
  }
  
  export default Table;