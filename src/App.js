import './App.scss';
import {
  Header,
  Navbar,
  LatestNews,
  EmailBlock,
  Footer
} from './components';
import { Devider, BlogItem, Button } from './components/common';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <BlogItem size="lg" />
      <Devider />
      <LatestNews />
      <Button color="ghost" size="lg" text="Load more" />
      <EmailBlock />
      <Footer />
    </div>
  );
}

export default App;
