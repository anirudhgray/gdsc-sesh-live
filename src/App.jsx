import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from './page/Feed';
import PostDetails from './page/PostDetails';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Feed />}></Route>
          <Route path='/posts/:id' element={<PostDetails />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
