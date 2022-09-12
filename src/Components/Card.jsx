import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardPlate = ({list}) => {
  return (
    <>
    <div className="cardplate col-md-4 col-12 " style={{margin:'10px 0px', width:'100%'}}>
                      <Card>
                            <Card.Img variant="top" src={list.img} style={{width:'100%', height:'280px', objectFit:'cover'}} />
                            <Card.Body>
                                <Card.Title style={{fontSize:'2rem',color:'#2c3e50'}}>{list.title}</Card.Title>
                                <Card.Text>
                                {list.desc}
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                      </Card>
        </div>
    </>
  )
}

export default CardPlate;
