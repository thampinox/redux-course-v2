import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class User extends Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props
    if (error) {
      return (
        <p>
          There something wrong happened during request, please reload the page.
        </p>
      )
    }
    if (isFetching) {
      return <p>loading...</p>
    }
    if (name) {
      return <p>Hello, {name}!</p>
    } else {
      return (
        <button className="btn" onClick={this.props.handleLogin}>
          Login
        </button>
      )
    }
  }

  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}
