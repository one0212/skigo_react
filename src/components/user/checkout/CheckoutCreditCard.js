import React from 'react'
import Cards from 'react-credit-cards'

import 'react-credit-cards/lib/styles.scss'
import 'bootstrap/dist/css/bootstrap.css'
import '../../../css/header.css'

const borderGray = {
  borderColor: 'rgb(190, 190, 190)',
}
class CheckoutCreditCard extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  }

  handleInputFocus = e => {
    this.setState({ focus: e.target.name })
  }

  handleInputChange = e => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div id="PaymentForm" className="d-flex justify-content-between">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className="ml-4 mt-1">
          <input
            autoComplete="off"
            className="btn-block p-2 user-text-input"
            style={borderGray}
            type="text"
            name="number"
            placeholder="卡號"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <small className="">例：49**, 51**, 36**, 50**</small>
          <input
            autoComplete="off"
            className="btn-block p-2 mt-2 user-text-input"
            style={borderGray}
            type="text"
            name="name"
            placeholder="姓名"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <input
            autoComplete="off"
            className="p-2 mt-3 mr-2 user-text-input d-inline-block"
            style={{ width: '6rem', borderColor: 'rgb(190, 190, 190)' }}
            type="text"
            name="expiry"
            placeholder="有效期限"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            autoComplete="off"
            className="p-2 mt-3 ml-2 user-text-input d-inline-block"
            style={{ width: '6rem', borderColor: 'rgb(190, 190, 190)' }}
            type="text"
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
      </div>
    )
  }
}

export default CheckoutCreditCard
