// import logo from './logo.svg';
import './App.css';

const contacts = [
  {name:"Nayan", number:102323},
  {name:"Anivesh", number:102323},
  {name:"Anubhav", number:102323},
  {name:"Antriksh", number:102323}
]

function List({data,renderItem, renderEmpty}){

  return (!data.length)?renderEmpty:(
    <ul>
      {data.map((item) => (
        <li key={item.name}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  )
}

function App() {   

  return (
    <>
      <h1>Contact List</h1>
      <List 
        data={contacts}
        renderEmpty = "There is no data"
        renderItem={(item) => <>{item.name} - {item.number} </>}
      />
    </>
  );
}

export default App;
