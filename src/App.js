import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Features from "./components/Features";
import Others from "./components/Others";
import Stats from "./components/Stats";
import Gateways from "./components/Gateways";
import PaymentActivities from "./components/PaymentActivities";
import Reviews from "./components/Reviews";
import AppFeatures from "./components/AppFeatures";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import NewPaymentActivites from "./components/NewPaymentActivities";
import NewReviews from "./components/NewReviews";

function App() {
  return (
    <div className="w-[100%] h-[100%]">
      <div className="bg-purpleLight2">
        <Header />
        <Content />
      </div>
      <Features />
      <Others />
      <Stats />
      <Gateways />
      <div className="text-formPay100 flex justify-start text-smallText bg-formPay10 w-64 mx-4 sm:mx-[2rem] md:mx-[2rem] lg:mx-[5rem] xl:mx-[17rem] 2xl:mx-[17rem]">
        <div className="mx-auto">Streamline all your payment activities</div>
      </div>

      <NewPaymentActivites />
      <NewReviews />
      <AppFeatures />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
