import './App.css';
import Sidebar from './Sidebar';

import Chat from './Chat';
>>>>>>> cb1a8f0b85abd6a6f5076ce24000ed79e8d17690

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/all').then(response => {
      setMessages(response,data);
    });
  }, []);

useEffect(() => {
  const pusher = new Pusher('b52672d0137607d2d5fe', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage) => {
    setMessages([...messages, newMessage]);
  });

  return () => {
    channel.unbind_all();
    channel.unsubscribe();
  };

}, [messages]);
 
console.log(messages);


  return (
    <div className="App">
      <h1> CheetChat</h1>
   
   <div className="app_body">
     <Sidebar />
<<<<<<< HEAD
   {/*Chat*/}
=======
   <Chat messages={messages}/>
>>>>>>> cb1a8f0b85abd6a6f5076ce24000ed79e8d17690
   </div>
    </div>
  );
}


export default App;



