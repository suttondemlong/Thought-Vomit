import Header from '../components/Header';
import '../App.css';

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