import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Article from './components/Article'
import Section from './components/Section'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title='Alex' />
      <Section />
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
