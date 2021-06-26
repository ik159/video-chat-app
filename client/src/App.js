import './App.css';
import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
function App() {
  return (
    <div className="App">
       <h1>Video Chat Client</h1>
       <VideoPlayer />
       <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
}

export default App;
