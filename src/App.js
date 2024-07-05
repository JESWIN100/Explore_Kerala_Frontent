import React from 'react';
import About from './Pages/About';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import ContactForm from './Pages/Contact';
import Details from './Pages/Details';
import Header from './Components/Header';
import Footer from './Components/Footer';
import DetailsPage from './Pages/DetailsPage';
import MyLoginForm from './Components/MyLoginForm';
import SignupForm from './Components/SignupForm;';


function App() {
  return (
    
<Router>
  <Header/>
<Routes>
<Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/details' element={<Details/>}/>
  <Route path='/contact' element={<ContactForm/>}/>
  <Route path='/detailspage/:id' element={<DetailsPage/>}/>
  <Route path='/login' element={<MyLoginForm/>}/>
  <Route path='/signup' element={<SignupForm/>}/>









</Routes>
<Footer/>
</Router>
  );
}

export default App;
