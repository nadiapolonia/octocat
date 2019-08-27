import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <>
        <section className="bg-white">
          <header className="top-header">
            <div className="flex center">
              <img
                className="octodex"
                src="https://image.flaticon.com/icons/svg/25/25231.svg"
              />
              <h3 className="octo-title">Octodex</h3>

              <a className="home" href="https://octodex.github.com/">
                Home
              </a>
              <a href="https://octodex.github.com/faq/">FAQ</a>
            </div>

            <div className="center right">
              <a href="https://twitter.com/githubdesign">
                Follow us on Twitter
              </a>
              <a href="https://github.com/">Back to Github.com</a>
            </div>
          </header>
        </section>
      </>
    )
  }
}

export default Header
