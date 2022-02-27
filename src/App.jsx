import * as React from "react";


const App = () => {
  const auth = () => {
    fetch('/auth')
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
   <div>
     <p>hi</p>
     <button onClick={auth}>Click for auth</button>
   </div>
  );
};

export default App;
