import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  state = { flashMessage: '', username: '', password: '' };

  onChange = (field, value) => {
    this.setState({ [field]: value });
  };

  onLogin = () => {
    axios
      .post('login', {
        username: this.state.username,
        password: this.state.password,
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.setState({ flashMessage: `Welcome, ${res.data.username}` });
      })
      .catch(res => {
        this.setState({ flashMessage: res.message });
      });
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor='usernameInput'>username</label>
          <input
            className='input'
            id='usernameInput'
            onChange={e => this.onChange('username', e.target.value)}
            placeholder='username'
            type='text'
          />
          <br />
          <label htmlFor='passwordInput'>password</label>
          <input
            className='input'
            id='passwordInput'
            onChange={e => this.onChange('password', e.target.value)}
            placeholder='password'
            type='text'
          />
        </div>

        {this.state.username && this.state.password ? (
          <button onClick={this.onLogin} data-testid='loginButton'>
            Login
          </button>
        ) : null}
        <div>{this.state.flashMessage}</div>
      </div>
    );
  }
}
