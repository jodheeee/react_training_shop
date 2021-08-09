import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function Main(props){
    let history = useHistory();

    return(
        <div>
            <div className="background">
                <h1>20% Season Off</h1>
                <p>
                The meaning of the phrase 'Life is full of ups and downs' 
                is 'Life is full of ups and downs'. It's a western proverb. 
                </p>
                <p>
                <Button variabt="primary">Learn more</Button>
                </p>
            </div>
            <div className="container">
                <div className="row">
                <Shoes shoes={props.shoes} history={history}/>
                </div>
                <button className="btn btn-primary" onClick={()=>{
                    axios.post('url', { id : 'abc'});
                    // loading UI show
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result)=>{
                        // loading UI hide
                        let temp = [...props.shoes];
                        props.shoesChg(temp.concat(result.data));
                    })
                    .catch(()=>{
                        // loading UI hide
                    })
                }}>더보기</button>
            </div>
        </div>
    )
}
function Shoes(props){
    
    return(
      props.shoes.map(function(obj, i){
        return(
          <div className="col-md-4 point" key={obj.id} onClick={()=>{
            props.history.push('/detail/' + obj.id);
          }}>
            <img src={"https://codingapple1.github.io/shop/shoes" + obj.id + ".jpg"} width="100%"/>
            <h4>{obj.title}</h4>
            <p>{obj.content}</p>
            <p>{obj.price + ' ₩'}</p>
          </div>
    
        )
      })
    )
}

export default Main;