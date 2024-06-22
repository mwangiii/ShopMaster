import './App.css';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AllRoutes } from './routes/Allroutes';

function App() {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
