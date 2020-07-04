import React from 'react';
import PeopleCard from './PeopleCard';





const CardList = ({data}) => {
    // if(true){
    //     throw new Error('NOOOOOOO!');
    // }
    return (
        <div className="container-fluid" >
            <div className="row offset-md-1" >
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
        </div>
    );
}



export default CardList;
