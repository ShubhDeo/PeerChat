import React, {useContext} from 'react'
import {Button} from 'react-bootstrap'

import { SocketContext } from '../SocketContext'

const Notifications = () => {
  const {answerCall, call, callAccepted} = useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <h3>{call.name} is calling: </h3>
          <Button variant="success" onClick={answerCall}>Answer</Button>
        </div>
      )}
    </>
  )
}

export default Notifications