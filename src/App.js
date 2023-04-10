import './App.scss';
import {
  Header,
  Navbar,
  BlogItemHorizontal
} from './components';
import { Devider } from './components/common';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <BlogItemHorizontal />
      <Devider />
    </div>
  );
}

export default App;
