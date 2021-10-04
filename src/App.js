import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation />
        <Content data = {props}/>
      </div>
    </BrowserRouter>

  );
}

export default App;
