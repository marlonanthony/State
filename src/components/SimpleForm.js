import React, { Component } from 'react'
import TextField from './TextField'
import Greetings from './Greetings'
import style from '../style'

export default class SimpleForm extends Component {
  state = {
    name: 'John Doe',
    nameError: ''
  }

  validateName = name => {
    const regex = /[A-Za-z]{3,}/

    return !regex.test(name) ? 
    'The name must contain at least three letters. Numbers and special characters are not allowed.'
    : ''
  }

  onNameBlur = () => {
    const { name } = this.state 

    const nameError = this.validateName(name) 

    return this.setState({ nameError })
  }

  onNameChange = e => {
    this.setState({
      name: e.target.value 
    })
  }

  render() {
    const { name, nameError } = this.state 

    return (
      <div style={style.form}>
        <TextField
          name='name'
          label='Name:'
          onChange={this.onNameChange}
          onBlur={this.onNameBlur} 
          error={nameError}
        />


        {/* <div style={style.inputGroup}>
          <label>
            Name: 
            <input 
              style={style.input}
              type='text' 
              name='name' 
              onChange={this.onNameChange}
              onBlur={this.onNameBlur}
            />
            {nameError && <div style={style.error}>{nameError}</div>}
          </label>
        </div> */}
        
        <Greetings name={name} />
      </div>
    )
  }
}
