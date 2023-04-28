import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Features from './components/Features';
import Others from './components/Others';
import Stats from './components/Stats';
import Gateways from './components/Gateways';
import PaymentActivities from './components/PaymentActivities';
import Reviews from './components/Reviews';
import AppFeatures from './components/AppFeatures';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NewPaymentActivites from './components/NewPaymentActivities';
import NewReviews from './components/NewReviews';

function App() {
  return (

    <div className='w-[100%] h-[100%]'>
 <div className='bg-purpleLight2'>
 <Header/>
 <Content/>
 </div>
  <Features/>
 <Others/>
 <Stats/>
 <Gateways/>
  <NewPaymentActivites/> 
 <NewReviews/>
  <AppFeatures/>
  <FAQ/>
 <Footer/>  
</div>

  );
}

export default App;
