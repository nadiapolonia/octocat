import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Cats from './components/Cats'
import Header from './components/Header'
import FavoriteCats from './components/FavoriteCats'
import CatProp from './components/CatProp'

class App extends Component {
  render() {
    return (
      <>
        <section>
          <Header />
        </section>

        {/* <Cats /> */}
        <main class="top-header">
          <FavoriteCats />
        </main>
      </>
    )
  }
}

export default App
