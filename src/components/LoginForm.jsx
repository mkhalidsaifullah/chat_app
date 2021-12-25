import { useState } from 'react';
import axios from 'axios';

const projectID = '03dff7e4-6124-4ef2-9559-3709c2ab5c79';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Invalid Credentials');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title"><i>U-</i>Chat</h1>
        <h2 id="tagline">Share your thoughts</h2>
        <form onSubmit={handleSubmit}>
          <img alt="U-Chat Icon" src = "logo.png" class="center"/>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Log In</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;