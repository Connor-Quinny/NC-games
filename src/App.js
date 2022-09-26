import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ReviewList from './Components/ReviewList';
import ReviewCard from './Components/ReviewCard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      {/* <ReviewList /> */}
      <Routes>
        <Route path='/reviews' element={<ReviewList />}></Route>
        <Route path='/reviews/:review_id' element={<ReviewCard />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
