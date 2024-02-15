import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'; 

function MyComponent() {
 
  const produits= [
    {
      
        id: 1,
      image:"https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/2/web/Famille62.webp",
      type: "junior",
   
      
      
    },
    {
      
        id: 2,
      image:"https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/2/web/Famille62.webp",
      type: "Senior",
     
      
    },

    {    id: 3,
        image:"https://www.commande-pizzatime.fr/CESARWEB_WEB/repimage/83bbc4350c114000b0e2d6c4ff204215/2/web/Famille52.webp",
        type: "Mega",
      
        
        
      },
      {    id: 4,
        image:"",
        type: "",
       
        
      },
      
  
    
       
        
        
      

  ];
  


  return (
    <div className="row row-cols-3 g-4">
    
    {produits.map((produit, index) => (
      <div key={index} className="col-md-4">
        <div className="boutique">
          <img src={produit.image} alt={`Produit ${produit.id}`} />
          <div>
            <div className="d-flex justify-content-between">
              <p className="text-success fw-bold">{produit.type}</p>
           
            </div>
            
           
  <div> 
    
  </div>

          </div>
        </div>
      </div>
    ))}
  </div>
  );
  
}

export default MyComponent;
