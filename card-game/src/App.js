import React from 'react';
import './App.css';
import WordCard from "./WordCard"
const RM = Math.floor(Math.random() * 3) + 1;
function App() {
  if ( RM == 1)
    return (
        <div>
          { <h1>สร้างโดย 6135512059</h1>  }
          
          <WordCard value="hello"/>
         
          
        </div>
        );
  if ( RM == 2)
    return (
        <div>
          { <h1>สร้างโดย 6135512059</h1>   }
          <WordCard value="Happy"/>
            
            </div>
            );
  if ( RM == 3)
      return (
          <div>
          { <h1>สร้างโดย 6135512059</h1>   }
            <WordCard value="SENPAIGOD"/>
                    
             </div>
             );
       
}

export default App;
