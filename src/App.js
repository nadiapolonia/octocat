import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Cats from './components/Cats'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <>
        <section>
          <Header />
        </section>

        <section>
          <Cats />
        </section>
      </>
    )
  }
}

export default App
