import React from 'react';
import './App.css';
import WordCard from "./WordCard"
const RM = Math.floor(Math.random() * 2) + 1; 
function App() {
  if ( RM == 1)
    return (
        <div>
          { "สร้างโดย 6135512059"  }
          
          <WordCard value="hello"/>
         
          
        </div>
        );
  if ( RM == 2)
    return (
        <div>
          { "สร้างโดย 6135512059"   }
          <WordCard value="Happy"/>
            
            </div>
            );
       
}
export default App;
