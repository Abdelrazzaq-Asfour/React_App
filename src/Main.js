import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import  data from './data.json';
import cardComp from './card';


function Main (){
    
    return(
        <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:'20px',marginTop:"3%"}}>

   {data.map(function(item){
  
    
    return(

        <Card style={{ width: '18rem' }}>

        <Card.Img variant="top" src={item.image_url}/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text>
          ☆(counter)
          </Card.Text>
          <Button variant="primary"> add to favaorites</Button>
        </Card.Body>
        </Card> 

           )
}
    )
    }
    </div>


        </>
    )
}
export default Main;