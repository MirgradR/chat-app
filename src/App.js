import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Navigation from './components/Navigation';



function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Navigation/>
      <Content/>
    </div>
  );
}

export default App;
