import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){
    return (
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    <List shoes={props.shoesList} dispatch={props.dispatch} />
                </tbody>
            </Table>
            { props.alert상태 === true 
              ? <div className="my-alert2">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={()=>{
                        props.dispatch({ type : '닫기' })
                    }}>닫기</button>
                </div>
              : null
            }
        </div>
    )
}

// state를 props화 하는 함수
function reduxFnc(state){
    return{
        shoesList : state.reducer,
        alert상태 : state.reducer2
    }
}

function List(props){
    return(
      props.shoes.map(function(obj, i){
        return(
            <tr>
                <th>{i+1}</th>
                <th>{obj.name}</th>
                <th>{obj.quan}</th>
                <th>
                    <button onClick={()=>{ props.dispatch({ type : '수량증가', payload : {id : obj.id} }) }}>+</button>
                    <button onClick={()=>{ props.dispatch({ type : '수량감소', payload : {id : obj.id} }) }}>-</button>
                </th>
            </tr>
        )
      })
    )
}

export default connect(reduxFnc)(Cart)

// export default Cart;