import React, { Component } from 'react'
import FavoriteCats from './FavoriteCats'

class CatProp extends Component {
  render() {
    return (
      <div>
        <a className="username-name" href={this.props.catUrl}>
          <div
            style={{ backgroundImage: `url(${this.props.catImageUrl})` }}
            className="cat cat-bg cat1"
          ></div>
        </a>
        <section className="flex username">
          <div class="flex">
            <p className="username-space gray">{this.props.number}</p>
            <a className="username-name" href={this.props.catUrl}>
              <p>{this.props.catName}</p>
            </a>
          </div>
          <a class="username-name" href={this.props.artistUrl}>
            <img className="icon" src={this.props.artistImage} />
          </a>
        </section>
      </div>
    )
  }
}

export default CatProp
