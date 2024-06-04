import React, { useState } from 'react';
import './App.css';
import Store from './Store';
import { Address, Resturant } from './model/resturant';
import BestMenu from './BestMenu';


let data:Resturant  ={
  name:'식당',
  category:'western',
  address:{
    city:'incheoi',
    detail:'somewhere',
    zipCode:23414
  },
  menu:[{name:"rose pasta" ,price:2000, category:"PASTA"},{name:"steack" ,price:3000, category:"STEAK"}]
}
  const showBestMenuName = (name:string) => {
    return "베스트 메뉴는 "+name
  }

function App() {
  const [myrestaurant,setMyrestaurant] =useState<Resturant>(data);
  const changeAdress =(address:Address)=>{
    setMyrestaurant({...myrestaurant,address:address})
  }
  return (
    <div className="App">
         welcome
         <Store info={myrestaurant} changeAdress={changeAdress}></Store>
          <BestMenu name="불고기피자"  category="피자" showBestMenuName={showBestMenuName}></BestMenu>
    </div>
  );
}

export default App;
