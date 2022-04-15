
import './App.css';
import CakeContainer from './component/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './component/HooksCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import NewCakeContainer from './component/NewCakeContainer';
import ItemContainer from './component/ItemContainer';
import UserContainer from './component/UserContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
