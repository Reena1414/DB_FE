import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {hostNameUrl} from '../../config/api'

class EditSecurity extends Component {
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
            Status:'',
            IsApiError:false
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
    componentDidMount(props) {
        var Scid = this.props.match.params.id;
        this.GetSecurityById(Scid);
    }
    GetSecurityById(Scid) {
        const apiUrl = hostNameUrl + "/security?id=" + Scid;
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result) {
                        this.setState({
                            Id:result.Id,
                            ISIN:result.ISIN,
                            CUSIP:result.CUSIP,
                            Issuer:result.Issuer,
                            MaturityDate:result.MaturityDate,
                            Coupon:result.Coupon,
                            Type:result.Type,
                            FaceValue:result.FaceValue,
                            Status:result.Status
                            
                        });
                    }
                    else {
                        alert("record not found!")
                    }
                },
                (error) => {
                    this.setState({ IsApiError: true });
                }
            )
    }

    UpdateSecurity() {
        
        let body = {
            Id:this.props.match.params.id,
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
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };

        let baseurl = hostNameUrl + "/security?id="+this.props.match.params.id;
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Updated successfully!");
                }
            })
            .catch((e) => {
                alert(e);
            });
    }

    render() {
        return (
            <div>
                <h1>Edit Security</h1>
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
                                <Button variant="success" onClick={() => this.UpdateSecurity()}>Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }
}
export default EditSecurity;