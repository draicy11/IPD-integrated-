import React from 'react';
import PeopleCard from './PeopleCard';
import "./Box.css";




const CardList = ({data}) => {
    // if(true){
    //     throw new Error('NOOOOOOO!');
    // }
    return (
        <div  className="grid1">
        {
            data.map((user,i)=>{
                return (
                <PeopleCard
                key = {i}
                id = {data[i].id} 
                image_url={data[i].image_url}
                name={data[i].name} 
                price={data[i].price}
                />
                
               
             
               
                );
            })
        }
        </div>
    );
}



export default CardList;
