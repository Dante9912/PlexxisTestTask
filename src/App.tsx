import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '~/Pages/HomePage';
import CssBaseline from '@mui/material/CssBaseline';
import {StyledEngineProvider} from '@mui/material/styles';
import { Provider } from "react-redux";
import store from './Store';

const App = () => {
  return (
    <Provider store={store}>
    <StyledEngineProvider injectFirst>
    <CssBaseline />
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
       </Routes>
</BrowserRouter>
</StyledEngineProvider>
   
</Provider>
  );
};

export default App;
