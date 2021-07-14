import AppRoutes from '../routes'
import AppProvider from './AppProvider';
import {Provider} from 'react-redux'
import store from '../store'

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <AppRoutes/>
      </AppProvider>
    </Provider>
  );
}

export default App;
