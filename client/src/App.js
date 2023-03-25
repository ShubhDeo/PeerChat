import React from 'react'
import './index.css'
import {Navbar, Container} from 'react-bootstrap'
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import { ContextProvider } from './SocketContext';


const App = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Peer Chat</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </Container>
      
    </div>
  )
}

export default App