import { useEffect } from "react";

function App() {

  useEffect(() => {

    fetch('http://localhost:4000/post', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(
      response => response.json()
    ).then(data => console.log(data))
  }, []);

  return (
    <div>
      helloworld
    </div>
  );
}

export default App;
