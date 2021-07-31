import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import Navbar from './Component/Profile/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProfilePhoto/>
      <FullName/>
      <Address/>

    </div>
  );
}

export default App;
