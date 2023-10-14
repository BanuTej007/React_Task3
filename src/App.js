import './App.css';
import Color from './components/Color'
import React from 'react';

function App() {
  const colors=['#FE0000','#00FF00','#0000FF','#FFFF00','#FF00FF','#00FFFF','#FEA500','#81007F','#FFC0CB','#008002',
                '#FF6147','#01CED1','#8B4512','#FF8B00','#4682B4','#FED700']
  return (
    <div>
      <Color colors={colors} />
    </div>
  );
}

export default App;