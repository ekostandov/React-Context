import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeButton from './ThemeButton';
import { themes, ThemeContext } from './theme-context';

// function App() {
class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <div className='App'>
        <ThemeContext.Provider value={this.state.theme}>
          <header
            className='App-header'
            style={{
              backgroundColor: this.state.theme.background,
              color: this.state.theme.color,
            }}
          >
            <img src={logo} className='App-logo' alt='logo' />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
            <ThemeButton toggleTheme={this.toggleTheme} />
          </header>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
