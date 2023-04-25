import './App.css';
import  React  from 'react';
import Like from './Components/Like';
import Comments from './Components/Comments';

const App=()=>{
  return (
    <div className="app">
      <div className='wrap'>
        <div className='card'>
          <div className='card-image'>
            <img src='https://img.championat.com/c/1350x759/news/big/w/p/podruga-ronaldu-vylozhila-novoe-foto-ego-ocenil-kokorin_1595487833155279868.jpg' alt=''/>
            <Like/>
          </div>
            <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;  
