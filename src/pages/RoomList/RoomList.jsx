import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function RoomList() {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col">
      <Header userName="Barbara" />
      <Content />
      <Footer />
    </div>
  );
}

export default RoomList;
