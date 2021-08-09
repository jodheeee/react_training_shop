import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

/*
class Hook extends React.Component{
    
    // 해당 컴포넌트가 생성될떄
    componentDidMount(){
        
    }
    
    // 해당 컴포넌트가 삭제될떄
    componentWillUnmount(){

    }

}
*/

let Box = styled.div`
    padding : 20px;
`;
let Title = styled.h4`
    font-size : 25px;
    color : ${ props => props.color }
`;

function Detail(props){
    let [display, displayChg] = useState();
    // import React, { useEffect } from 'react';
    useEffect(()=>{
        /*
        window.setTimeout(()=>{
            displayChg({display:"none"});
        }, 2000);
        */
        return () => {

        }
    },[/* 조건 삽입 (null 이면 load시 동작) */]);
    
    let { id } = useParams();
    let history = useHistory();
    let target = props.shoes.find(function(obj){
        return obj.id == id
    });
    console.log(target);
    return(
            <div className="container">
                <Box>
                    <Title color={'red'}></Title>
                </Box>
                <div className="my-alert2" style={display}>
                    <p>재고가 얼마 남지 않았습니다.</p>
                </div>
                <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes" + target.id + ".jpg"} width="100%" />  
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{target.title}</h4>
                    <p>{target.content}</p>
                    <p>{target.price} 원</p>
                    <Info 재고={props.재고}/>
                    <button className="btn btn-danger">주문하기</button>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{
                        history.goBack();
                    }}>뒤로가기</button> 
                </div>
                </div>
            </div> 
        )
  }

  function Info(props){
      return(
          <p>재고 : {props.재고[0]}</p>
      )
  }

  export default Detail;