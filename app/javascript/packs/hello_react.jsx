// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import PropTypes from 'prop-types'
import 'babel-polyfill'

class Hello extends Component {
  static defaultProps = {
    name: 'David'
  }

  static propTypes = {
    name: PropTypes.string
  }

  state = {
    name: this.props.name
  };

  async componentWillMount() {
    const response = await axios.get('/api/pages')
    this.setState({ name: response.data.name })
  }

  render = () => <div>Hello {this.state.name}!</div>
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Hello name='React' />, document.getElementById('app'));
})
