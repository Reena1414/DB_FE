import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { hostNameUrl } from "../../config/api";

class AddSecurity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id:'',
            ISIN:'',
            CUSIP:'',
            Issuer:'',
            MaturityDate:'',
            Coupon:'',
            Type:'',
            FaceValue:'',
            Status:''
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
    addSecurity() {

        let body = {
            Id:this.state.Id,
            ISIN:this.state.ISIN,
            CUSIP:this.state.CUSIP,
            Issuer:this.state.Issuer,
            MaturityDate:this.state.MaturityDate,
            Coupon:this.state.Coupon,
            Type:this.state.Type,
            FaceValue:this.state.FaceValue,
            Status:this.state.Status
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };

        let baseurl = hostNameUrl + "/security/";
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Added successfully!");
                    this.setState({
                        Id:'',
                        ISIN:'',
                        CUSIP:'',
                        Issuer:'',
                        MaturityDate:'',
                        Coupon:'',
                        Type:'',
                        FaceValue:'',
                        Status:''
                    })
                }
            })
            .catch((e) => {
                alert(e);
            });
    }

    render() {
        return (
            <div>
                <h1>Add Security</h1>
                <Link variant="primary" to="/sc">View Security list</Link>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="Id">
                                <Form.Label>Id</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Id"
                                    value={this.state.Id}
                                    onChange={this.handleChange}
                                    placeholder="Id" />
                            </Form.Group>
                            <Form.Group controlId="ISIN">
                                <Form.Label>ISIN</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ISIN"
                                    value={this.state.ISIN}
                                    onChange={this.handleChange}
                                    placeholder="ISIN" />
                            </Form.Group>
                            <Form.Group controlId="CUSIP">
                                <Form.Label>CUSIP</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="CUSIP"
                                    value={this.state.CUSIP}
                                    onChange={this.handleChange}
                                    placeholder="CUSIP" />
                            </Form.Group>
                            <Form.Group controlId="Issuer">
                                <Form.Label>Issuer</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Issuer"
                                    value={this.state.Issuer}
                                    onChange={this.handleChange}
                                    placeholder="Issuer" />
                            </Form.Group>
                            <Form.Group controlId="MaturityDate">
                                <Form.Label>MaturityDate</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="MaturityDate"
                                    value={this.state.MaturityDate}
                                    onChange={this.handleChange}
                                    placeholder="MaturityDate" />
                            </Form.Group>
                            <Form.Group controlId="Coupon">
                                <Form.Label>Coupon</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Coupon"
                                    value={this.state.Coupon}
                                    onChange={this.handleChange}
                                    placeholder="Coupon" />
                            </Form.Group>
                            <Form.Group controlId="Type">
                                <Form.Label>Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Type"
                                    value={this.state.Type}
                                    onChange={this.handleChange}
                                    placeholder="Type" />
                            </Form.Group>
                            <Form.Group controlId="FaceValue">
                                <Form.Label>FaceValue</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="FaceValue"
                                    value={this.state.FaceValue}
                                    onChange={this.handleChange}
                                    placeholder="FaceValue" />
                            </Form.Group>
                            <Form.Group controlId="Status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Status"
                                    value={this.state.Status}
                                    onChange={this.handleChange}
                                    placeholder="Status" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="success" onClick={() => this.addSecurity()}>Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }
}
export default AddSecurity;