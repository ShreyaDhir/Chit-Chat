import './App.css';
import Sidebar from './Sidebar.css';
import Chat from './Chat.css';

function App() {
  return (
    <div className="App">
      <h1> CheetChat</h1>
   
   <div className="app_body">
     <Sidebar />
   <Chat />
   </div>
    </div>
  );
}


export default App;



