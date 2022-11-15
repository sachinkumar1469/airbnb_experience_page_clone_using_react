import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className='cardWrapper'>
        <Card img="https://triathlonmagazine.ca/wp-content/uploads/2018/09/Screen-Shot-2018-09-12-at-3.36.59-PM.png" rating="5" info="Life Lessons with Katie Zaferes" cost="125"/>
        <Card img="https://triathlonmagazine.ca/wp-content/uploads/2018/09/Screen-Shot-2018-09-12-at-3.36.59-PM.png" rating="5" info="Life Lessons with Katie Zaferes" cost="125"/>
        <Card img="https://triathlonmagazine.ca/wp-content/uploads/2018/09/Screen-Shot-2018-09-12-at-3.36.59-PM.png" rating="5" info="Life Lessons with Katie Zaferes" cost="125"/>
        <Card img="https://triathlonmagazine.ca/wp-content/uploads/2018/09/Screen-Shot-2018-09-12-at-3.36.59-PM.png" rating="5" info="Life Lessons with Katie Zaferes" cost="125"/>
      </div>
    </>
  );
}

export default App;
