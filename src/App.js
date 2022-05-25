import './App.css';
import Row from './assets/row'

function App() {
  const data = [
    [' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X'],
    ['X', ' ', 'X', ' ', 'X', ' ', 'X', ' '],
    [' ', 'X', ' ', 'X', ' ', 'X', ' ', 'X'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['O', ' ', 'O', ' ', 'O', ' ', 'O', ' '],
    [' ', 'O', ' ', 'O', ' ', 'O', ' ', 'O'],
    ['O', ' ', 'O', ' ', 'O', ' ', 'O', ' ']
  ]

  return (
    <table className='no-border'>
      <tbody>
      {data.map((rowData, index) => {
          const number = data.length - index
          
          return <Row key={number.toString()} number={number} data={rowData} />
        })}
      </tbody>
    </table>
  );
}

export default App;
