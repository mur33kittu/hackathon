import React, {useEffect, useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import { connect } from "react-redux";
import StepProgressBar from "react-step-progress";
import * as actions from '../actions'
import store from '../store/store';
import 'react-step-progress/dist/index.css';


const InfoModal = (props) => {
    const [contents, setContents] = useState([])

    const singleStep = data => {
      return <h1>{data}</h1>
    }
    
    const returnSteps = props => {      
        let arr = []
        let obj = {
            label: '',
            subtitle: '',
            name: '',
            content: ''
        }
        if(props.trackHistory) {          
          props?.trackHistory.forEach((track, i) =>  {    
            obj = {
              label: i+1,
              name: 'step ' + i+1,
              content: singleStep(track)
            };
            arr.push(obj)
          })        
          return arr;
        } else {
          return arr;
        }
    }
  
    
    useEffect(() => { 
        setContents(returnSteps(props.tracking))
    }, [props?.tracking.trackingNumber])
  return (
    <>     
      <Modal show={props.show} onHide={props.handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.tracking.trackingNumber} - {props.tracking.trackingInitialStatus}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {contents.length > 0 && <StepProgressBar
            startingStep={contents.length - 1}
            steps={returnSteps(props.tracking)}
            previousBtnName=""
            nextBtnName =""
        />}
        </Modal.Body>
      </Modal>
    </>
  );
}

const Team8Modal = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function getTrackingInfo(trackingNumber) {          
      store.dispatch(actions.getTrackingInfo(trackingNumber));
      setShow(true);
    }
    return (
        <div>  
            <Button className="nextButton" onClick={e => getTrackingInfo(props.trackingNumber)}>
                {props.trackingNumber}
            </Button>
            {props.tracking && <InfoModal handleClose={handleClose} handleShow={handleShow} show={show} tracking={props.tracking} />}
            {props.children}
        </div>
    )
}


function mapStateToProps (state) {
    return {products: state.products, orders: state.orders, tracking: state.tracking};
}
  
export default connect (mapStateToProps, actions) (Team8Modal);