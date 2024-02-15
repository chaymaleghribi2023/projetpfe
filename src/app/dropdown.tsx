'use client'
import React from 'react'
import { useState } from 'react'
import { CiLogout } from 'react-icons/ci';
import { CgMail } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import './dropdown.css'
function DropDownMenu() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };
  
  return (
    <div className={`navigation${isActive ? " active" : ""}`}>
    <div className="userBx">
      <div className="imgBx">
        <img src="/image/user2.jpg" alt="user" />
      </div>
      <p className="username"></p>
    </div>
    <div className="menuToggle" onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className="menu">
      <li>
        <p><CgMail /> E-mail:
        <input className='input' placeholder='Saisssez votre e-mail'></input>
      </p></li>
      <li>
        <p><RiLockPasswordFill />  Mot de passe:
        <input className='input' placeholder='Saisssez votre mot de passe'></input>
      </p></li>
      <div>
      <a href="" style={{ marginRight:'10px' }}>Mot de passe oublié ! </a></div>
      <div>
      <button style={{ backgroundColor: 'gray', color: 'white', display: 'block', margin: '0 auto' }}>Connexion</button>
     <p className='text' style={{ textAlign:'center', color: 'red', display: 'block', margin: '0 auto' }}>ou</p>
    <a href='' style={{ textAlign:'center', color: 'red', display: 'block', margin: '0 auto' }}>Inscription</a>
    </div>
    <p>En continuant, vous acceptez nos :</p>
    <div>
      <a href="">Conditions Générales d'Utilisation </a><br/>
      <a href="">Conditions Générales de Vente  </a><br/>
      <a href="">Politiques de Confidentialité  </a><br/>

    </div>
      <li>
        <a href="/"><CiLogout/> Logout</a>
      </li>
    </ul>
  </div>
);
}



export default DropDownMenu 