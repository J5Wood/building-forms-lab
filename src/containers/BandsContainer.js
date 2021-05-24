import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => {
    return this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)
  }

  render() {
    return(
      <div>
        {this.renderBands()}
        <br/>
        <BandInput addBand={this.props.addBand} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: bandData => dispatch({ type: 'ADD_BAND', payload: bandData})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
