import React, { Component } from 'react'

class ActiveUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resStatus: '',
    }
  }
  componentDidMount() {
    console.log(this.props.location)
    console.log(this.props.location.search)
    const params = decodeURI(this.props.location.search)
      .split('?')[1]
      .split('&')

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
          this.setState({ resStatus: '啟用成功' })
        } else {
          this.setState({ resStatus: '啟用連結已過期' })
        }
      })
      .catch(err => {
        this.setState({ resStatus: '系統異常，請稍後再執行' })
        console.log(err)
      })
  }

  render() {
    return <h1 id="result">{this.state.resStatus}</h1>
  }
}

export default ActiveUser

// http://localhost:3000/active_user.html?email=xxxx&code=xxxxx 取 email, code 的值
