import React from 'react'
import {Container , Col , Row } from 'react-bootstrap'
import  Holder from './1.jpg'

export default function ProfileImg() {
    return (
        <Container>
        <Row>
          <Col xs={6} md={4}>
            <img src={Holder} alt='pio x' rounded />
            <input type='button' value='upload'  />
          </Col>
        </Row>
      </Container>
    )
}
