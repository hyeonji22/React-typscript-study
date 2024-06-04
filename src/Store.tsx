import { Address, Resturant } from "./model/resturant"
//props타입 지정
interface OwnProps{
    info:Resturant
    //함수 타입지정 ->return 타입 지정
    changeAdress(address:Address):void
}
export default function Store({info,changeAdress}:OwnProps){
    //props 함수 사용
    function changeName(){
        //기존주소에서 city만 변경
        const newAddress: Address = {
            ...info.address,
            city: "New City",
        };
        changeAdress(newAddress);
    }
    return(
        <>
        <div>Store</div>
        <p>{info.address.city}</p>
        <p>{info.category}</p>
        <button onClick={changeName}>변경</button>
        </>
    )
}