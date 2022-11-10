import { Provider } from 'react-redux';
import store from './redux/store';
import Greetings from './components/greetings';

function App() {
  return (
    <Provider store={store}>
      <Greetings />
    </Provider>
  );
}

export default App;
