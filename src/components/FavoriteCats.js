import React, { Component } from 'react'
import CatProp from './CatProp'

const catArr = [
  {
    catImageUrl: 'https://octodex.github.com/images/Fintechtocat.png',
    catUrl: 'https://octodex.github.com/fintechtocat/',
    number: '#148',
    catName: 'Fintechtocat',
    artistUrl: 'https://github.com/ceciliorz',
    artistImage: 'https://github.com/ceciliorz.png'
  },
  {
    catImageUrl: 'https://octodex.github.com/images/Brennatocat.png',
    catUrl: 'https://octodex.github.com/brennatocat/',
    number: '#147',
    catName: 'Brennatocat',
    artistUrl: 'https://github.com/johncreek',
    artistImage: 'https://github.com/johncreek.png'
  },
  {
    catImageUrl: 'https://octodex.github.com/images/filmtocats.png',
    catUrl: 'https://octodex.github.com/filmtocats/',
    number: '#146',
    catName: 'Filmtocats',
    artistUrl: 'https://github.com/heyhayhay',
    artistImage: 'https://github.com/heyhayhay.png'
  },
  {
    catImageUrl: 'https://octodex.github.com/images/Sentrytocat_octodex.jpg',
    catUrl: 'https://octodex.github.com/sentrytocat/',
    number: '#145',
    catName: 'Sentrytocat',
    artistUrl: 'https://github.com/cameronmcefee',
    artistImage: 'https://github.com/cameronmcefee.png'
  },
  {
    catImageUrl: 'https://octodex.github.com/images/puddle_jumper_octodex.jpg',
    catUrl: 'https://octodex.github.com/umbrellatocat/',
    number: '#144',
    catName: 'Umbrellatocat',
    artistUrl: 'https://github.com/rubyjazzy',
    artistImage: 'https://github.com/rubyjazzy.png'
  },
  {
    catImageUrl: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    catUrl: 'https://octodex.github.com/boxertocat/',
    number: '#143',
    catName: 'Boxertocat',
    artistUrl: 'https://github.com/rubyjazzy',
    artistImage: 'https://github.com/rubyjazzy.png'
  }
]

export class FavoriteCats extends Component {
  render() {
    return (
      <>
        {catArr.map(cats => {
          return (
            <CatProp
              catImageUrl={cats.catImageUrl}
              catUrl={cats.catUrl}
              number={cats.number}
              catName={cats.catName}
              artistUrl={cats.artistUrl}
              artistImage={cats.artistImage}
            />
          )
        })}
      </>
    )
  }
}

export default FavoriteCats
