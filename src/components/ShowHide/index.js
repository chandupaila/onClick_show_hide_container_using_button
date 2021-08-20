import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShowFirstName: false, isShowLastName: false}

  onFirstName = () => {
    this.setState(prevState => ({isShowFirstName: !prevState.isShowFirstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({isShowLastName: !prevState.isShowLastName}))
  }

  render() {
    const {isShowFirstName, isShowLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="show-hide">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {isShowFirstName && <p className="name">Joe</p>}
          </div>
          <div className="show-hide">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {isShowLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
