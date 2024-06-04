// let data  ={
//     name:'식당',
//     category:'western',
//     address:{
//       city:'incheoi',
//       detail:'somewhere',
//       zipCode:23414
//     },
//     menu:[{name:"rose pasta" ,price:2000, category:"PASTA"},{name:"steack" ,price:3000, category:"STEAK"}]
//   }

// export type Resturant ={
//     name :string;
//     category :string;
//     address:{
//         city:string;
//         detail:string;
//         zipCode:number;
//     };
//     menu:{
//         name:string;
//         price:number;
//         category:string;
//     }[]
// }
export type Resturant ={
    name :string;
    category :string;
    address:Address;
    menu:Menu[];
}
export type Address ={
    city:string;
    detail:string;
    zipCode?:number;//?는 있어도 되고 없어도됨*주의해서 사용:필요한 데이터 라도 넘어가는 경우 발생
}
export type Menu = {
    name:string;
    price:number;
    category:string;
}

//Address에서 zipCode 만 빼고 사용하고 싶을때
export type AddressWithoutZip =Omit<Address,'zipCode'>
//Resturant에서 category만 사용하고 싶을때
export type ResturantOnlyCategory = Pick<Resturant,'category'>

//어떤 타입들어올지 모를때 제네릭타입 사용
export type ApiResponse<T> ={
    data:T[],
    totalPage:number,
    page:number,
}
export type ResturantResponse = ApiResponse<Resturant>
export type MenuResponse = ApiResponse<Menu>