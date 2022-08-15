
import './App.css';
import Menu from './components/menu';
import {Photo} from './components/picture';
import {About} from './components/about';
import {Detail} from './components/details';


function App() {
  return (
   <>
   <div className="container">
    <div className='Menu'><Menu/></div>
    <div className='Photo'><Photo/></div>
    <div className='split'>
      <div className='About'><About/></div>
      <div className='Detail'><Detail/></div>
    </div>
    


  </div>
   </>
  );
}

export default App;
