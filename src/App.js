import React from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; 
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import Content from './components/Content/Content';
import HeaderContainer from './components/Header/HeaderContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';
import { initializeThunkCreator } from './redux/app-initial-reducer';
import store from './redux/redux-store';

class App extends React.Component {

  componentDidMount() {
    this.props.initialize()
  }
  
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <NavigationContainer />
        <Content />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initialize: initializeThunkCreator })(App)

const AppMain = (props) => {
  return (
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}
export default AppMain

