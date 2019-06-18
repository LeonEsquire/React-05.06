import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>Контакты</h1>
        <p>Email: 1@2.ru</p>
        <p>Telephone: +700000000</p>
        <p>Номер офиса: { this.props.params.number }</p>
      </div>
    )
  }
}
