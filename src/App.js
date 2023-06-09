import './styles/App.css';
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
