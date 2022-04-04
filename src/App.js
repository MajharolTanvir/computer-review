import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Review from './component/Review/Review';
import Dashboard from './component/Dashboard/Dashboard';
import Blogs from './component/Blogs/Blogs';
import NotFound from './component/NotFound/NotFound';
import About from './component/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
