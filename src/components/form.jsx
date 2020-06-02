import React from 'react'
import { Col , Row } from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import ProfileImg from './profileImg'
import {Button} from 'react-bootstrap'

export default function Form1(props) {

 

    return (
        <Form  onSubmit={props.handleSubmit}>
            <Row>
                <Col>

        <Row>
          <Col>
            <Form.Label>Batch Name</Form.Label>
            <Form.Control  type='text'  name='BatchName' />
          </Col>
          <Col>
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" name='Category'>
      <option>Dheli</option>
      <option>Dheli</option>
      <option>Dheli</option>
      <option>Dheli</option>
      <option>Dheli</option>
      </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Label>From</Form.Label>
            <Form.Control type='date' name='from' />
          </Col>
          <Col>
          <Form.Label>Subject</Form.Label>
            <Form.Control type='text' name='Subject'/>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Label>To</Form.Label>
            <Form.Control type='date' name='to'/>
          </Col>
          <Col>
          <Form.Label>NOS of Live Sessions</Form.Label>
            <Form.Control type='number'  name='NLS'/>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Label>Details</Form.Label>
            <Form.Control type='text' name='Details' />
          </Col>
        </Row>
         <Row>
         <Col>
         <Button type='submit' variant="warning">Save and Continue</Button>
          </Col>
         </Row>
       
        </Col>
      
      
      
      
      
        <Col>
        <ProfileImg />
        </Col>
        </Row>
      </Form>
    )
}
