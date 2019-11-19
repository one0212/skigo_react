import React, { Component } from 'react'

import ActiveSucc from './ActiveSucc'
import ActiveFail from './ActiveFail'

import '../../css/account_active_result.css'

class AccountActiveResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resStatus: false,
    }
  }
  componentDidMount() {
    console.log(window)
    const params = window.location.search.split('?')[1].split('&')
    console.log(params)
    fetch('http://localhost:3001/api/user/active', {
      method: 'put',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: params[0].substr('email='.length),
        activeCode: params[1].substr('code='.length),
      }),
    })
      .then(res => {
        if (res.status === 200) {
          this.setState({ resStatus: true })
        } else {
          this.setState({ resStatus: false })
        }
      })
      .catch(err => {
        this.setState({ resStatus: false })
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <style type="text/css">
          {`
        .btn-orange {
        background-color: #fd702d;
        color: #fff;
        }
    `}
        </style>

        <div className="account-active-wrapper d-flex flex-column align-items-center">
          {this.state.resStatus ? <ActiveSucc /> : <ActiveFail />}
        </div>
      </>
    )
  }
}

export default AccountActiveResult
