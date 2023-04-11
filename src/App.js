import './App.scss';
import {
  Header,
  Navbar,
  LatestNews,
  EmailBlock
} from './components';
import { Devider, BlogItem, Button } from './components/common';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <BlogItem size="lg" />
      <Devider />
      <LatestNews />
      <Button color="ghost" size="lg" text="Load more" />
      <EmailBlock />
    </div>
  );
}

export default App;
