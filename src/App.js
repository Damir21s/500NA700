import './App.scss';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import MainPage from './component/mainPage/mainPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
