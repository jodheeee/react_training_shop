import React, { useContext, useEffect, useState } from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import {재고context} from './App.js';
import {CSSTransition} from "react-transition-group";
import { connect, useDispatch, useSelector } from 'react-redux';
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
    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);

    let 재고 = useContext(재고context);
    let state = useSelector((state) => state);
    let dispatch = useDispatch();

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
                        {재고} AAA
                        <Info 재고={props.재고}/>
                        <button className="btn btn-danger" onClick={()=>{
                            props.dispatch({type : '항목추가', payload : {id:2, name : target.title, quan : 7 }})
                            history.push('/cart')
                        }}>주문하기</button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={()=>{
                            history.goBack();
                        }}>뒤로가기</button> 
                    </div>
                </div>

                <Nav variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={()=>{ 누른탭변경(0); 스위치변경(false); }}>Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={()=>{ 누른탭변경(1); 스위치변경(false); }}>Option 2</Nav.Link>
                    </Nav.Item>
                </Nav>
                
                <CSSTransition in={스위치} classNames="wow" timeout={500}>
                    <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
                </CSSTransition>
                
                <br/>        
                <br/>        
                <br/>        
            </div> 
        )
  }

  function TabContent(props){
    useEffect(()=>{
        props.스위치변경(true)
    });

    if (props.누른탭 === 0) {
        return <div>000</div>
    }else if(props.누른탭 === 1){
        return <div>111</div>
    }else if(props.누른탭 === 2){
        return <div>222</div>
    }
  }

  function Info(props){
      return(
          <p>재고 : {props.재고[0]}</p>
      )
  }

    // state를 props화 하는 함수
    function reduxFnc(state){
        return{
            shoesList : state.reducer,
            alert상태 : state.reducer2
        }
    }
  export default connect(reduxFnc)(Detail)