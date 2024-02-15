import  DropDownMenu from"./dropdown";
export default  function Header(){
    return (
     
        <>
         < DropDownMenu/>
          <header className="">
          <a className="text-red-600" href="#">
              {/* Utilisez le composant Image de Next.js */}
              <img src="https://tshirt-factory.com/images/detailed/58/pizza-time-401119829.png?fbclid=IwAR1Rg9722NB3QayVrkOTJJw4QEwthSn-9TA6p-ODIXgdbwW5jO_WXe5GK-I" alt="Google Logo" width={100} height={100} />
    
            </a>
           
            <div className="scrolling-images">
        <img
          src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Menu Icon"
          style={{width:"50%"}}
        />
     <img
          src="https://images.unsplash.com/photo-1610614819513-58e34989848b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc3Rmb29kfGVufDB8fDB8fHww"
          alt="Menu Icon"
          style={{width:"50%"}}

        />
          {/*    <img
          src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Menu Icon"
          style={{width:"50%"}}

        />
          <img
          src="https://img.freepik.com/photos-gratuite/arrangement-vue-dessus-nourriture-fond-bois_23-2148308806.jpg"
          alt="Menu Icon"
          style={{width:"50%"}}

        /> */}
      </div>
      

          </header>
        </>
      );
}