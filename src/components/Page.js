import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Page extends Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props
    if (error) {
      return (
        <p className="error">Something wrong happened during photos load.</p>
      )
    }
    if (isFetching) {
      return <p>Loading...</p>
    } else {
      return photos.map((
        entry,
        index // [1]
      ) => (
        <div key={index} className="photo">
          <p>
            <img src={entry.picture} alt="" />
          </p>
          {/* <p>{entry.likes.count} ❤</p> */}
        </div>
      ))
    }
  }

  render() {
    const { year, photos } = this.props
    return (
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onBtnClick}>
            2018
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2017
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2016
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2015
          </button>{' '}
          <button className="btn" onClick={this.onBtnClick}>
            2014
          </button>
        </p>
        <h3>
          {year} year [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}