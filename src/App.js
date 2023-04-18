import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/home/HomePage";
import BookMarks from './pages/bookmark/BookMarks';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {

  return (

  <BrowserRouter>
  <Routes>

  <Route exact path="/" element={
  <Provider store={store}>
     <HomePage/>
  </Provider>
 
  
  } />
  <Route exact path='/bookmarks' element={
  <Provider store={store}>
  <BookMarks/>
  </Provider>
  }/>


  </Routes>
  </BrowserRouter>
   
  );
}

export default App;
