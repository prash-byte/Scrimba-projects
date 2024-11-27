
import './App.css';
import Navbar from './components/Navbar';
import Main1 from './components/Main1';
import Card from './components/Card';
import data from './data';

function App() {
  const dataElements = data.map(card => {
    return <Card 
         key = {card.id}
         item = {card}
    />
  })
  return (
    <div className="App">
      <Navbar /> 
      <Main1 />
      <section className='card-list'> {dataElements} </section>
    </div>
  );
}

export default App;
