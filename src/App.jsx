import React from 'react'
import styles from './style'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../service-worker.js')
      .then(function(registration) {
        console.log('Service worker registered successfully:', registration.scope);
      })
      .catch(function(error) {
        console.log('Service worker registration failed:', error);
      });
  });
}
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar /> 
    </div>
  </div>

  <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Hero /> 
    </div>
  </div>
  
  <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CTA />
      <Footer /> 
    </div>
  </div>
</div>
)
 
  


export default App