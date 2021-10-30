import AppMain from './App';
import ReactDOM from 'react-dom';

it('renders good', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AppMain />, div)
  ReactDOM.unmountComponentAtNode(div)
})

