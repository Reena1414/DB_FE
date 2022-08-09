import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { hostNameUrl } from "../../config/api";


class AddTrade extends Component {
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
                SettlementDate:''
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
    addTrade() {

        let body = {
                "id":this.state.Id,
                "book_id":this.state.BookId,
                "counter_party_id":this.state.CounterPartyId,
                "security_id":this.state.SecurityId,
                "quantity":this.state.Quantity,
                "status_":this.state.Status,
                "price":this.state.Price,
                "buy_sell":this.state.Buy_Sell,
                "trade_date":this.state.TradeDate,
                "settlement_date":this.state.SettlementDate
        };
        console.log(body);

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.parse(JSON.stringify(body)),
        };

        let baseurl = hostNameUrl + "/trade-add";
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Added successfully!");
                    this.setState({
                        Id:'',
                        BookId:'',
                        CounterPartyId:'',
                        SecurityId:'',
                        Quantity:'',
                        Status:'',
                        Price:'',
                        Buy_Sell:'',
                        TradeDate:'',
                        SettlementDate:''
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
                <h1>Add Trade</h1>
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
                                <Button variant="success" onClick={() => this.addTrade()}>Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )

    }
}
export default AddTrade;