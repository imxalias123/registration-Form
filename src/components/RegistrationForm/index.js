// Write your JS code here
import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    firstNameError: false,
    lastNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstNameInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastNameInput: event.target.value})
  }

  isFirstValid = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }

  isLastValid = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.isFirstValid()
    const isValidLastName = this.isLastValid()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.isFirstValid()
    this.setState({firstNameError: !isValidFirstName})
  }

  onBlurLastName = () => {
    const isValidLastName = this.isLastValid()
    this.setState({lastNameError: !isValidLastName})
  }

  renderFormNotSubmitted = () => {
    const {
      firstNameInput,
      lastNameInput,
      firstNameError,
      lastNameError,
    } = this.state
    return (
      <form onSubmit={this.onSubmitForm}>
        <label className="label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          id="firstName"
          placeholder="First name"
          value={firstNameInput}
          className="input"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameError && <p className="error">Required</p>}
        <label className="label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          id="lastName"
          value={lastNameInput}
          className="input"
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {lastNameError && <p className="error">Required</p>}

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessPage = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success"
      />
      <p>Submitted successfully</p>
      <button className="btn" type="button">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="bg-container">
        <h1>Registration</h1>
        <div className="box">
          {isFormSubmitted
            ? this.renderSuccessPage()
            : this.renderFormNotSubmitted()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
