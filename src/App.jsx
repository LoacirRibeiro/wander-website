import Navbar from  './components/navbar/Navbar';
import Home from  './components/home/Home';
import Cards from  './components/cards/Cards';
import Tours from  './components/tours/Tours';
import Discount from  './components/discount/Discount';
import Review from  './components/review/Review';
import Staff from  './components/staff/Staff';
import Footer from  './components/footer/Footer';

function App() {
 return (
    <div>
      <Navbar />
      <Home />
      <Cards />
      <Tours />
      <Discount />
      <Review />
      <Staff />
      <Footer />
    </div>
  );
}

export default App;