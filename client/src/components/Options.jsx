import React, {useState, useContext} from 'react'
import {Button, Container, Form, InputGroup, Row, Col} from 'react-bootstrap'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {MdPhoneDisabled, MdAssignmentAdd} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {SocketContext} from '../SocketContext'


const Options = ({children}) => {
  const {me, callAccepted, name, setName, leaveCall,callUser, callEnded } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("")
  return (
   <>
      <Form>
      <Row>
        <Col xs={12} lg={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <CopyToClipboard text={me}>
            <Button>Copy Your ID</Button>
          </CopyToClipboard>
        </Form.Group>
        </Col>
        <Col xs={12} lg={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Make a Call</Form.Label>
          <Form.Control type="text" placeholder="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)}/>
          
          {callAccepted && !callEnded ? (
            <Button variant='danger' onClick={leaveCall}>Hang Up</Button>
          ): (
            <Button variant='success' onClick={() => {
              callUser(idToCall)
            }}>Call</Button>
          )}

        </Form.Group>
        </Col>
        </Row>
      </Form>
      {children}
    </>
  )
}

export default Options