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
        <Navigation menu = {props.state}/>
        <Content state = {props} dispatch = {props.dispatch} store = {props.store} />
      </div>
    </BrowserRouter>

  );
}

export default App;
