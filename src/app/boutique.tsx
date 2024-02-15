import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'; 
import {card} from "./constants"

function MyComponent() {
 
 
  



  return (
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
    {Object.values(card.shoplist).map((item:any,id:number) => (
      <div key={id}>
            <a href={`/components/${item.Company.replace(/\s/g, "")}`}>
         <img src={item.image} alt={`Produit`} /></a>
        <h2>{item.Company}</h2>
        <p>Ville: {item.town}</p>
        <p>Adresse: {item.Address}</p>
      
       

      
      </div>
    ))}
  </div>
  
  )
  
}

export default MyComponent;
