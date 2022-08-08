import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {hostNameUrl} from '../../config/api'
import '../../bootstrap-4.3.1/bootstrap-4.3.1/dist/css/bootstrap.min.css'

class EditTrade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Id:'',
            BookId:'',
            CounterPartyId:'',
            SecurityId:'',
            Quantity:'',
            Status:'',
            Price:'',
            Buy_Sell:'',
            TradeDate:'',
            SettlementDate:'',
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
        var Tdid = this.props.match.params.id;
        this.GetTradeById(Tdid);
    }
    GetTradeById(Tdid) {
        const apiUrl = hostNameUrl + "/trade?id=" + Tdid;
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result) {
                        this.setState({
                            Id:result.Id,
                            BookId:result.BookId,
                            CounterPartyId:result.CounterPartyId,
                            SecurityId:result.SecurityId,
                            Quantity:result.Quantity,
                            Status:result.Status,
                            Price:result.Price,
                            Buy_Sell:result.Buy_Sell,
                            TradeDate:result.TradeDate,
                            SettlementDate:result.SettlementDate
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

    UpdateTrade() {
        
        let body = {
                Id:this.state.Id,
                BookId:this.state.BookId,
                CounterPartyId:this.state.CounterPartyId,
                SecurityId:this.state.SecurityId,
                Quantity:this.state.Quantity,
                Status:this.state.Status,
                Price:this.state.Price,
                Buy_Sell:this.state.Buy_Sell,
                TradeDate:this.state.TradeDate,
                SettlementDate:this.state.SettlementDate
        };

        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };

        let baseurl = hostNameUrl + "/trade?id="+this.props.match.params.id;
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
                <h1>Edit Trade</h1>
                <Link variant="primary" to="/td">View Trade list</Link>
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
                            <Form.Group controlId="BookId">
                                <Form.Label>BookId</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="BookId"
                                    value={this.state.BookId}
                                    onChange={this.handleChange}
                                    placeholder="BookId" />
                            </Form.Group>
                            <Form.Group controlId="CounterPartyId">
                                <Form.Label>CounterPartyId</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="CounterPartyId"
                                    value={this.state.CounterPartyId}
                                    onChange={this.handleChange}
                                    placeholder="CounterPartyId" />
                            </Form.Group>
                            <Form.Group controlId="SecurityId">
                                <Form.Label>SecurityId</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="SecurityId"
                                    value={this.state.SecurityId}
                                    onChange={this.handleChange}
                                    placeholder="SecurityId" />
                            </Form.Group>
                            <Form.Group controlId="Quantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Quantity"
                                    value={this.state.Quantity}
                                    onChange={this.handleChange}
                                    placeholder="Quantity" />
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
                            <Form.Group controlId="Price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Price"
                                    value={this.state.Price}
                                    onChange={this.handleChange}
                                    placeholder="Price" />
                            </Form.Group>
                            <Form.Group controlId="Buy_Sell">
                                <Form.Label>Buy_Sell</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Buy_Sell"
                                    value={this.state.Buy_Sell}
                                    onChange={this.handleChange}
                                    placeholder="Buy_Sell" />
                            </Form.Group>
                            <Form.Group controlId="TradeDate">
                                <Form.Label>TradeDate</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="TradeDate"
                                    value={this.state.TradeDate}
                                    onChange={this.handleChange}
                                    placeholder="TradeDate" />
                            </Form.Group>
                            <Form.Group controlId="SettlementDate">
                                <Form.Label>SettlementDate</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="SettlementDate"
                                    value={this.state.SettlementDate}
                                    onChange={this.handleChange}
                                    placeholder="SettlementDate" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="success" onClick={() => this.UpdateTrade()}>Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }
}
export default EditTrade;