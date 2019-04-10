import React from 'react';
import * as rt from 'react-testing-library';
import Login from './Login';

afterEach(rt.cleanup);

describe('Login', () => {
  it('displays no login button if no username & no password', () => {
    // write test first, see it fail, implement feature, see test pass
    const wrap = rt.render(<Login />);
    const loginBtn = wrap.queryByTestId(/loginButton/i);
    expect(loginBtn).toBeFalsy();
  });

  it('displays login button if username & password', () => {
    const wrap = rt.render(<Login />);
    const usernameInput = wrap.getByLabelText('username');
    const passwordInput = wrap.getByLabelText('password');

    rt.fireEvent.change(usernameInput, { target: { value: 'A' } });

    expect(wrap.queryByTestId(/loginButton/i)).toBeFalsy();

    rt.fireEvent.change(passwordInput, { target: { value: 'b' } });

    expect(wrap.queryByTestId(/loginButton/i)).toBeTruthy();
  });

  it('can change input values', () => {
    // we can fire change events on inputs
    // and we can grab inputs by their placeholder texts or their values
  });

  it('can login successfully', async () => {
    // see the greeting render
  });

  it('can fail miserably', async () => {
    // see the error render
  });
});
