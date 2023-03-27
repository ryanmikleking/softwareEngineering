import React from 'react';
import { Table } from 'react-bootstrap'; 
import "./ClientSide.css"
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import "./AdminSide.css"
import { useHistory } from 'react-router-dom';

function ClientSide() {
  const history = useHistory();

  const redirect = () => {
    history.push('/rcreate');
  }
  const redirectView = () => {
    history.push('/cview');
  }

  return(
  <><div style={{}}>
  <div style ={{paddingLeft: 600, fontSize: 50}}>
  Open Source Tracking System
  </div>
</div>

  <div >
<DropdownButton id="dropdown-basic-button" title="Filter Results">
  <Dropdown.Item href="#/action-1">License</Dropdown.Item>
  <Dropdown.Item href="#/action-2">State</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Date Requested</Dropdown.Item>
  <Dropdown.Item href="#/action-4">Date Approved</Dropdown.Item>
</DropdownButton>
</div>

  <div>
  <Table striped bordered hover>
    <thead>
      <tr>
      <th>Name</th>
      <th>Date</th>
      <th>Project Name</th>
      <th>Licensing</th>
      <th>Version</th>
      <th>Status</th>
      <th>Date Checked</th>
      <th>Project URL</th>
      <th>View Request</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mark Fischer</td>
        <td>09/13/2022</td>
        <td>Meps</td>
        <td>Commercial</td>
        <td>V0.1</td>
        <td>Approved</td>
        <td>09/15/2022</td>
        <td>URL</td>
        <td><Button onClick={redirectView} variant="secondary">View Request</Button></td>
      </tr>
      <tr>
        <td>Ray Bach</td>
        <td>09/18/2022</td>
        <td>Meps</td>
        <td>Commercial</td>
        <td>V0.13</td>
        <td>Denied</td>
        <td>09/22/2022</td>
        <td>URL</td>
        <td><Button onClick={redirectView} variant="secondary">View Request</Button></td>
      </tr>
      <tr>
        <td>Larry Smith</td>
        <td>09/29/2022</td>
        <td>Meps</td>
        <td>Private</td>
        <td>V1.12</td>
        <td>Pending</td>
        <td>10/5/2022</td>
        <td>URL</td>
        <td><Button onClick={redirectView} variant="secondary">View Request</Button></td>
      </tr>
    </tbody>
  </Table>
  </div>



  <div style={{}}>
  <div style ={{paddingLeft: 820}}>
  <Button onClick={redirect} variant="primary" size="lg">
    Add New Project
  </Button>
</div>
</div>
</>
  );
}


export default ClientSide;