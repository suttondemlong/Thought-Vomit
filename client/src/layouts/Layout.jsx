import Header from '../components/Header';

function Layout(props) {
  return (
    <div className="App">
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;