import Header from './components/header/Header';
import TitleImage from './components/titleImage/TitleImage';
import ContactForm from './components/forms/ContactForm';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="MainSection container-fluid d-flex flex-column flex-lg-row justify-content-around mb-5">
        <TitleImage/>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
