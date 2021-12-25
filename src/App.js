import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '03dff7e4-6124-4ef2-9559-3709c2ab5c79';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  
  if (localStorage.getItem('username'))
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

//window.onunload = () => {
   //Clear the local storage
  // localStorage.clear();
//}

// infinite scroll, logout, more customizations...

export default App;