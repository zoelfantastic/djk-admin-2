import React, { Component } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Content from './components/Content'

export default class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Menu />
          <Footer />
          <Content />
      </div>
    )
  }
}

