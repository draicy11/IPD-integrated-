import React from "react";
import CardList from './api/CardList';
import "./api/Box.css";
export default class Product extends React.Component {

    constructor(){
        super()
        // We will create the state object now. The things inside the state can change.
        this.state = {
            selectedValue: 'Nothing selected', 
            data: [],
            }
        };
        handleSelectChange = (selectedValue) =>{
            this.setState({
              selectedValue: selectedValue
            });
        }


         async  componentDidMount() {
        // Here we are fetching data from the website
        fetch('http://127.0.0.1:8000/api/product-list/').then(response =>{
            return response.json();
        }).then(users=>{
            this.setState({data: users});
        })
    }
  render() {
    const {data} = this.state;
    if(!data.length){
        return <h3>Loading...</h3>
    }else{
        return (
            <div>
            <CardList className="grid1" data = {data}/>
         
            </div>
        );
    }
  }
}
