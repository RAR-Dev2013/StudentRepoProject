import logo from './logo.svg';
import './App.css';

import Table from './components/table/Table'

const list = [
  { id: 1, name: "Joe Dean", Age: 22},
  { id: 2, name: "Rox Dean", Age: 44},
  { id: 3, name: "Rox Dean", Age: 44},
  { id: 4, name: "Rox Dean", Age: 44},
  { id: 5, name: "Rox Dean", Age: 44},
  { id: 6, name: "Rox Dean", Age: 44},
  { id: 7, name: "Rox Dean", Age: 44},
  { id: 8, name: "Rox Dean", Age: 44},
  { id: 9, name: "Rox Dean", Age: 44},
  { id: 10, name: "Rox Dean", Age: 44},
  { id: 11, name: "Rox Dean", Age: 44},
]

const colNames = ['Id', 'Name', 'Age']

function App() {
  return (
    <div className="App">
      <Table list={list} colNames={colNames} pageSize={3} />
    </div>
  );
}

export default App;
