import './App.scss';
import {
  Header,
  Navbar,
  LatestNews
} from './components';
import { Devider, BlogItem } from './components/common';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <BlogItem size="lg" />
      <Devider />
      <LatestNews />
    </div>
  );
}

export default App;
