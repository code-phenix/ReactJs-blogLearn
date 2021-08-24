import './App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  const title='welcome';
  const [name, setname] = useState('siva')
  const onClickMe= ()=>{
    
    // if(setname=='siva'){
    // setname('sss');
    // }
    // else{
      setname('sss');
    //}
    }
  
  return (
    <div className="App">
        <div className="content">
          {/* <button onClick={()=>onClickMe()}>click me</button><br/> */}
          <Home />
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                            

    </div>
  );
}

export default App;
