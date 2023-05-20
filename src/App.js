import React, { useState } from 'react';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  const [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const removeColor = (index) => {
    const updatedColors = [...colors];
    updatedColors.splice(index, 1);
    setColors(updatedColors);
  }

  const colorMap = colors.map((color, i) => <ColorBlock color={color} key={i} removeColor={() => removeColor(i)} /> );

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;




// import './App.css';
// import { useState } from 'react';
// import ColorBlock from './ColorBlock';
// import ColorForm from './ColorForm';

// function App() {
//   const [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']);
//   const colorMap = colors.map((color, i) => <ColorBlock color={color} key={i} /> );
//   const addColor = (newColor) => {
//     setColors([...colors, newColor])
//   }


//   return (
//     <div className="App">
//       {colorMap}
//       <ColorForm addColor={addColor}/>
//     </div>
//   );
// }

// export default App;



// // import './App.css';
// // import { useState } from 'react';
// // import ColorBlock from './ColorBlock';
// // import ColorForm from './ColorForm';

// // function App() {
// //   const [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']);
// //   const colorMap = colors.map((color, i) => <ColorBlock color={color} key={i} /> );

// //   return (
// //     <div className="App">
// //       {colorMap}
// //     </div>
// //   );
// // }

// // export default App;




// // // import './App.css';
// // // import { useState } from 'react'
// // // import ColorBlock from './ColorBlock'

// // // function App() {
// // //   let colors = [ colors, setColors ] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
// // //   let colorMap = colors.map (( color, i) => <ColorBlock color= {color} key={i} /> )
  
// // //   return (
// // //     <div className="App">
// // //       { colorMap }
    
// // // </div>

// // //   );
// // // }

// // // export default App;


