import React from "react";
import CardList from '../api/CardList';
import './components.css'
export default class Product extends React.Component {

    constructor(props){
        super(props);
        // We will create the state object now. The things inside the state can change.
            this.state = {
                data: [],
                filteredProducts:[],
                value: 'None'
            }

            this.handleChange = this.handleChange.bind(this);

        };


        handleChange(event) {
            this.setState({value: event.target.value});
            console.log(event.target.value);
        }
    


        handleSelectChange = (selectedValue) =>{
            this.setState({
              selectedValue: selectedValue
            });
        }


         async  componentDidMount() {
        // Here we are fetching data from the website
        fetch('http://127.0.0.1:8000/api/products/').then(response =>{
            return response.json();
        }).then(users=>{
            this.setState({data: users,filteredProducts:users});
        })
    }
   
            
        
  render() {
    const {data, value} = this.state;
    let filterdata=this.state.data;
    if(value!=='None'){
        filterdata =  this.state.data.filter(user =>{
            return user.category.includes(value);
        })
    }
    if(!data.length){
        return( 
        <div>
            <h3>Loading...</h3>
        </div>)
    }else{
        return (
            <div>
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit} >
                        <label className="label-check" style={{fontFamily:"Bebas Neue",color:"#44566c"}}>
                        Filter By :&nbsp; 
                        <select value={this.state.value} onChange={this.handleChange} >
                            <option value="None">All</option>
                            <option value="JE">Jeans</option>
                            <option value="TP">Apparels</option>
                            <option value="SH">Shoes</option>
                        </select>
                        </label>
                    </form>
                </div>
               
               
                <hr/>
                <CardList className="grid1" data = {filterdata}/>
            </div>
        );
    }
  }
}