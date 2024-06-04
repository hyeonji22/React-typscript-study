import React, { useState } from 'react'
import { Menu } from './model/resturant'

// interface OwnProps extends Menu {
//     showBestMenuName(name:string):string
// }
//Menu에서 price빼고 설정
interface OwnProps extends Omit<Menu,'price'> {
    showBestMenuName(name:string):string
}
//interface 와 type 둘다 extends사용가능
// type OwnProps = Menu & {
//     showBestMenuName(name:string):string
// }
function BestMenu({name,category,showBestMenuName}:OwnProps) {
    const [isShow,setIsShow] = useState(false);
    function handlershowBestMenuName(){
        showBestMenuName(name);
        setIsShow(!isShow);
    }
  return (
    <>
    <div>BestMenu</div>
    <button onClick={handlershowBestMenuName}>베스트 메뉴{isShow === true?' 닫기':' 보기'}</button>
    {isShow === true?<div>{name}</div>:''}
    </>
  )
}

export default BestMenu