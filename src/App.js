import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ReviewList from './Components/ReviewList';
import ReviewCard from './Components/ReviewCard';
import Error from './Components/Error';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/reviews' element={<ReviewList />}></Route>
        <Route path='/reviews/:review_id' element={<ReviewCard />}></Route>
        <Route path='/reviews/categories/:category' element={<ReviewList />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route c></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
