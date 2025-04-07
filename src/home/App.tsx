/** @format */

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div className='card'>
        <h1>Camila Paschini</h1>
        <h3> Senior Javascript Engineer</h3>
      </div>

      <div className={'bottom'}>
        <p className='muted'>Made with Vite and React</p>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
    </>
  );
}

export default App;
