import Header from '../components/Header';

function Layout(props) {
  return (
    <div className="App">
      <Header
        currentUser={props.currentuser}
        handleLogout={props.handleLogout}
      />
      {props.children}
    </div>
  );
}

export default Layout;