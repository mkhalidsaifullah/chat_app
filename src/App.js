import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'd492700a-5139-4188-a884-19cdf95ab1a7';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm projectID ={projectID}/>;
  
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

export default App;