import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import AddNew from './views/AddNew';
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/new' element={<AddNew />}/>
        <Route path='/edit/:id' element={<Update />}/>
      </Routes>
    </div>
  );
}

export default App;
