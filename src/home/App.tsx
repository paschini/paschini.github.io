/** @format */

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Camila Paschini</h1>
      <h3> Senior Javascript Engineer</h3>
      <div className='card'>
        <p></p>
      </div>

      <div>
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
