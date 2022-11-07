import Header from "./components/Header/Header";
import "./App.scss";
import Footer from './components/Footer/Footer';
import Features from "./components/Features/Features";
import Banner from './components/HomeBanner/Banner';
import PricingPlans from "./components/Pricingplans/PricingPlans";
import GetConnected from "./components/GetConnected/GetConnected ";
import OurValues from './components/OurValues/OurValues';
//import "../node_modules/bootstrap/scss/bootstrap.scss"
function App() {
  return (
    <>
     
      <Header />
     <Banner/>  
    <GetConnected />
    <Features /> 
     <PricingPlans/> 
      <OurValues/> 
      <Footer/>  
    </>
  );
}

export default App;
