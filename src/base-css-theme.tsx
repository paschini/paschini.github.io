/** @format */
import { createUseStyles } from 'react-jss';

export const globalStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      overflow: 'hidden',
      fontFamily: [
        '-apple-system',
        ' BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ]
    },
    code: {
      fontFamily: [
        'source-code-pro',
        'Menlo',
        'Monaco',
        'Consolas',
        'Courier New'
      ]
    }
  }
});

export const theme = {
  background: '#282c34',
  headerBackground: '#282c34',
  color: 'white'
};
