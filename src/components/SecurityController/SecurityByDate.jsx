import React, { Component } from "react";
import { Row, Form, Col, Button,Table} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { hostNameUrl } from "../../config/api";


class SecurityRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StartDate:'',
            EndDate:'',
            securities:[]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }


    securityRange() {
        let body = {
            "start": this.state.StartDate,
            "end": this.state.EndDate
        };


        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        };
       
        let baseurl = hostNameUrl + "/security-range";
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    console.log(results);
                    alert("Added successfully!");
                    this.setState({
                        StartDate:'',
                        EndDate:'',
                        securities:results
                    })
                }
            })
            .catch((e) => {
                alert(e);
            });
    }

    render() {
    var securitylist=this.state.securities;
      return (<div>
          <h2>Security List</h2>
          <Link variant="primary" to="/addsecurity">Add Security</Link>

         {securitylist && securitylist.length > 0} {
          <Table className="table" >
                    <thead>
                        <tr>
                          <th>Id</th>
                          <th>ISIN</th>
                          <th>CUSIP</th>
                          <th>Issuer</th>
                          <th>MaturityDate</th>
                          <th>Coupon</th>
                          <th>Type</th>
                          <th>FaceValue</th>
                          <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { securitylist.map(sc => 
                          <tr key={sc.id}>
                          <td>{sc.id}</td>
                          <td>{sc.isin} </td>
                          <td>{sc.cusip}</td>
                          <td>{sc.issuer}</td>
                          <td>{sc.maturity_date}</td>
                          <td>{sc.coupon}</td>
                          <td>{sc.type_}</td>
                          <td>{sc.face_value}</td>
                          <td>{sc.status_}</td>
                          <td>
                            <Link variant="info" to={"/editsecurity/" + sc.id}>Edit</Link>
                            &nbsp;<Button variant="danger" onClick={() => this.deleteSecurity(sc.id)}>Delete</Button>
                          </td>
                          </tr>)
                        }
                    </tbody>
            </Table>}
           <Row>
               <Col sm={6}>
                   <Form onSubmit={this.handleSubmit}>
                       <Form.Group controlId="StartDate">
                           <Form.Label>StartDate</Form.Label>
                           <Form.Control
                               type="text"
                               name="StartDate"
                               value={this.state.StartDate}
                               onChange={this.handleChange}
                               placeholder="StartDate" />
                       </Form.Group>
                       <Form.Group controlId="EndDate">
                           <Form.Label>EndDate</Form.Label>
                           <Form.Control
                               type="text"
                               name="EndDate"
                               value={this.state.EndDate}
                               onChange={this.handleChange}
                               placeholder="EndDate" />
                       </Form.Group>
                       <Form.Group>
                           <Button variant="success" onClick={() => this.securityRange()}>Save</Button>
                       </Form.Group>
                   </Form>
               </Col>
           </Row>
       </div>)
    }
    
}
export default SecurityRange;