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

  it('can change input values', () => {
    // we can fire change events on inputs
    // and we can grab inputs by their placeholder texts or their values
    const wrap = rt.render(<Login />);

    /*
      SNAPSHOTING
    */
    // so when running this test, a snapshot of the actuall DOM is taken
    // and saved in __snapshots__ folder inside components folder
    expect(wrap.asFragment()).toMatchSnapshot();
    /*
      › 1 snapshot written.
      Snapshot Summary
      › 1 snapshot written from 1 test suite.
    */

    // now if you do changes to the DOM, you will get an error when running this code
    // saying that the DOM is different than that of snapshot
    // you can update the snapshot with pressing 'u' if you want to update it
    // to current DOM view

    const inputValue = 'name';
    const passValue = 'secretPassword';

    rt.fireEvent.change(wrap.getByPlaceholderText('username'), {
      target: { value: inputValue },
    });

    // expect(wrap.getByPlaceholderText('username').value).toBe(inputValue);
    expect(wrap.getByDisplayValue(inputValue));

    rt.fireEvent.change(wrap.getByPlaceholderText('password'), {
      target: { value: passValue },
    });
    // expect(wrap.getByPlaceholderText('password').value).toBe(passValue);
    expect(wrap.getByDisplayValue(passValue));
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

  it('can login successfully', async () => {
    // see the greeting render
  });

  it('can fail miserably', async () => {
    // see the error render
  });
});
