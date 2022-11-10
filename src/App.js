import store from "./redux/store";
import Greetings from "./components/greetings";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
     <Greetings/>
    </Provider>
  );
}

export default App;
