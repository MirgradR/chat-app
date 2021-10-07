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
        <Navigation menu = {props.data}/>
        <Content data = {props} dispatch = {props.dispatch}/>
      </div>
    </BrowserRouter>

  );
}

export default App;
