import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class ListCategory
 extends Component {
  render() {
    return (
      <Col md={2} mt={2}>
        <h3> <strong> Kategori </strong> </h3>
        <hr />
      </Col>
    )
  }
}
