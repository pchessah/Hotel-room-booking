import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about-us" component={AboutUs} />

      </Switch>

    </>

  );
}

export default App;
