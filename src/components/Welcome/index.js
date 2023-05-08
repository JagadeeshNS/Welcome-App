// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscription: false}

  buttonClick = () => {
    this.setState(prevState => ({subscription: !prevState.subscription}))
  }

  getButtonText = () => {
    const {subscription} = this.state

    return subscription ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <div>
          <button type="button" onClick={this.buttonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
