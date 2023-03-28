import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);
  const [data, setData] = useState([]);
  const n1 = Number(num)
  const n2 = Number(num2)


  const addRow = () => {
    const obj = { n1, n2 };
    setData([...data, obj]);
  };
  useEffect(() => {

    fetch('http://localhost:4000/post', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(
      response => response.json()
    ).then(data => console.log(data)).catch(err => {
      console.log(err);
      return {} //(or [], or an empty return, or any return at all)
    })
  }, []);

  return (

    <div>
      <h1> </h1><br />
      <label>
        enter number:
        <input
          value={num}
          onChange={e => setNum(e.target.value)}
          type="number"
        />
      </label><br /><br />
      <label>
        enter number:
        <input
          value={num2}
          onChange={e => setNum2(e.target.value)}
          type="number"
        />
      </label><br /><br />
      <button onClick={() => setSum(n1 * n2)}>
        *
      </button>
      <button onClick={() => setSum(n1 + n2)}>
        +
      </button>
      <button onClick={addRow}>
        arr
      </button>
      {/* <p>{data.map((emp, index) => (
        <div key={index}>
          <h3>{emp.n1}</h3>
        </div>
      ))}</p> */}
      <p>{JSON.stringify(data)}</p>
      <p>{sum}</p>
    </div>
  );
}

export default App;
