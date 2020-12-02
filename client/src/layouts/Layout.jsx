import Header from '../components/Header';

function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      {props.children}
    </div>
  );
}

export default Layout;