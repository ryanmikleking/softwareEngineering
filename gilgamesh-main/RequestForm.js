
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const RequestForm = () => {
  const history = useHistory();

  const redirect = () => {
    history.push('/cside');
  }

    return (
        <div>
            <h4 style={{textAlign: 'center',position: 'relative',padding: 30}}>Create Request</h4>
                <Form style={ {textAlign: 'center', position: 'relative',width: 1900, padding: 60}}>
                <   Form.Group>
                        <Form.Label>Name of Program:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Version of Program:</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Link to Program:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Reason for Program:</Form.Label>
                        <Form.Control type="text" as="textarea" row={3}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Who is the Program for:</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group>
                        <Button onClick={redirect} style={{margin: 30}} variant="outline-secondary" type="cancel">Cancel</Button>
                        <Button onClick={redirect} style={{margin: 30}} variant="outline-secondary" type="submit" > Submit Request </Button>
                    </Form.Group>
                </Form>
        </div>
    );
};

export default RequestForm;
