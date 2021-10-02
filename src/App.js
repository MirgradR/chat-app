import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
