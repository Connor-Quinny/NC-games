import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ReviewList from './Components/ReviewList';
import ReviewCard from './Components/ReviewCard';
// import ReviewCategories from './Components/ReviewCategories';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      {/* <ReviewCategories reviewList={reviewList}/> */}
      <Routes>
        <Route path='/reviews' element={<ReviewList />}></Route>
        <Route path='/reviews/:review_id' element={<ReviewCard />}></Route>
        <Route path='/reviews/categories/:category' element={<ReviewList />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
