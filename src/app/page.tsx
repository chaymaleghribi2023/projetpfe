import React from "react";
import Image from "next/image"; // Import Image from next/image
import "bootstrap/dist/css/bootstrap.min.css";
import Header from"./header";
import MyComponent from "./boutique";

export default function Home() {
 

  return (
    <React.Fragment>
   

      <div
        className="search-box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ marginRight: "10px" }}>No magazin a proximité</h1>
          <img
            src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-street-food-shop-3d-character-illustration-png-image_13370984.png"
            alt="Menu Icon"
            width="90"
            className="border border-gray-300 px-4 py-2 rounded-md"
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Saisir votre adresse, code postal ou ville.."
            className="border border-gray-300 px-4 py-2 rounded-md"
          />
       
          <button type="button" className=" px-3 border border-red-500">
            <svg
              color="red"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </button>
         
        </div>
      </div>
      <main>
        {/* Incluez votre composant MyComponent ici */}
        <MyComponent />
      </main>
    
  </React.Fragment>
  );
}
