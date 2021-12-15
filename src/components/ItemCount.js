import React, { useState } from "react";
import BFXTTW01 from './../img/BFXTTW01.jpg';
import './../components/ItemCount.css';

function ItemsCount() {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(10);
    return (
    <div class="product">
        <div class="productName">
            <h1>THERMALTAKE COOLER WATER 3.0 120 CL-W232-PL12SW-B</h1>
            <h3 class="stock">Stock disponible: {stock}</h3>
        </div>
        <div class="product1">
            <img src={BFXTTW01}></img>
        </div>
        <div class="countProduct1">
            <button type="button" class="btn btn-dark" onClick={() => { if(count>0){setCount(count - 1); setStock(stock + 1)}}}>-</button>
            <span> {count} </span>
            <button type="button" class="btn btn-dark" onClick={() => { if(count<10){setCount(count + 1); setStock(stock - 1)}}}>+</button>
        </div>
        <div class="addCar">
            <button type="button" class="btn btn-dark">
                add to car
            </button>
        </div>
    </div>
    );
}

export default ItemsCount;

// import React from "react";
// import BFXTTW01 from './../img/BFXTTW01.jpg';
// import './../components/ItemCount.css';

// class ItemsCount extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             contador : 0,
//             stock: 10,
//             cont: 10,
//         }; 
//     }

//     onClickOneMore(){
//         if(this.state.contador < this.state.stock){
//             this.setState({
//                 contador : this.state.contador+1,
//                 cont : this.state.cont-1
//             });
//         }
//     }
//     onClickOneLess(){
//         if(this.state.contador > 0){
//             this.setState({
//                 contador : this.state.contador-1,
//                 cont : this.state.cont+1
//             });
//         }
//     }
//     render(){
//         return (
//         <div class="product">
//             <div class="productName">
//                 <h1>THERMALTAKE COOLER WATER 3.0 120 CL-W232-PL12SW-B</h1>
//                 <h3>Stock disponible: {this.state.cont}</h3>
//             </div>
//             <div class="product1">
//                 <img src={BFXTTW01}></img>
//             </div>
//             <div class="countProduct1">
//                 <button type="button" onClick={()=>this.onClickOneLess()}  class="btn btn-dark">-</button>
//                 <Contador valor={this.state.contador}/>
//                 <button type="button" onClick={()=>this.onClickOneMore()}  class="btn btn-dark">+</button>
//                 <button type="button" class="btn btn-dark">add to car</button>
//             </div>
//         </div>
//         )
//     }
// }

// const Contador = props => {
//     return(
//         <div>
//         <h1>{props.valor}</h1>
//         </div>
//     );
// };

// export default ItemsCount;
