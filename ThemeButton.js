import React from 'react';
import { ThemeContext } from './theme-context';

const ThemeButton = props => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button
          onClick={props.toggleTheme}
          style={{
            marginTop: '20px',
            backgroundColor: theme.color,
            color: theme.background,
          }}
        >
          Switch theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
};

export default ThemeButton;
