/** @format */

import './App.css';

import { Education, Footer, Jobs, NameAndTitle, Skills } from './blocks';

const App = () => (
  <div className='layout'>
    <NameAndTitle />
    <Skills />

    <div className='mainContainer'>
      <Jobs />
      <Education />
    </div>

    <Footer />
  </div>
);

export default App;
