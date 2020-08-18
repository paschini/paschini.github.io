/** @format */

import jss from 'jss';

export const globalStyleSheet = jss
  .createStyleSheet({
    '@global': {
      body: {
        margin: 0,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
      },
      code: {
        fontFamily:
          "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
      }
    }
  })
  .attach();

export const theme = {
  background: '#282c34',
  headerBackground: '#282c34',
  color: 'white'
};
