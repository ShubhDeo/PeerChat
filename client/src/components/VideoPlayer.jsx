import React, {useContext} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import { SocketContext } from '../SocketContext'

const VideoPlayer = () => {
  const {name, call, callAccepted, myVideo, userVideo, callEnded, stream} = useContext(SocketContext);

  return (
    
      <Row style={{
        display: 'flex', justifyContent: 'center'
      }}>
        {/* Our own video */}
        {stream && (
          <Col xs={12} lg={6} >
            <h3>{name || 'Name'}</h3>
            <video playsInline muted ref={myVideo} autoPlay/>
          </Col>
        )}
        {/* User video */}
        {callAccepted && !callEnded && (
          <Col xs={12} lg={6} >
            <h3>{call.name || 'Name'}</h3>
            <video playsInline ref={userVideo} autoPlay/>
          </Col>
        )}
      </Row>
    
  )
}

export default VideoPlayer