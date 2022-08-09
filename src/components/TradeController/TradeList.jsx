import React,{Component} from "react";
import { Table, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {hostNameUrl} from '../../config/api'



class TradeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        trade: [],
        IsApiError:false
    }
  }

  componentDidMount() {
    fetch(hostNameUrl+ "/trades")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    trade:result
                });
            },
            (error) => {
                this.setState({ IsApiError: true });
            }
        )
}

sortAscending = () => {
  const sortAsc = this.state.trade;
  sortAsc.sort((a, b) => a.settlement_date- b.settlement_date).reverse()
  this.setState({
    trade:sortAsc
 })
}

    deleteTrade(Id){
      const { trade } = this.state;
      const baseurl = hostNameUrl + "/trade/"+Id;

      const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
   
    fetch(baseurl, requestOptions)
        .then((res) => {
            return res;
        })
        .then((results) => {
          this.setState({
            trade: trade.filter(td => td.id !== Id)
          });
          alert('Delete successful');
        
        })
        .catch((e) => {
            alert(e);
        });

      
  }
  render() {
    var tradelist=this.state.trade;
    // console.log(tradelist)
    if (tradelist && tradelist.length > 0) {
      return (<div>
          <h2>Trade List</h2>
          <Link variant="primary" to="/addtrade">Add Trade</Link>
          <Table className="table" >
                    <thead>
                        <tr>
                          <th>Id</th>
                          <th>BookId</th>
                          <th>CounterPartyId</th>
                          <th>SecurityId</th>
                          <th>Quantity</th>
                          <th>Status</th>
                          <th>Price</th>
                          <th>Buy_Sell</th>
                          <th>TradeDate</th>
                          <th>SettlementDate</th>
                          <th><button onClick={this.sortAscending}>matured recently</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        { tradelist.map(td => 
                          <tr key={td.id}>
                          <td>{td.id}</td>
                          <td>{td.book_id} </td>
                          <td>{td.counter_party_id}</td>
                          <td>{td.security_id}</td>
                          <td>{td.quantity}</td>
                          <td>{td.status_}</td>
                          <td>{td.price}</td>
                          <td>{td.buy_sell}</td>
                          <td>{td.trade_date}</td>
                          <td>{td.settlement_date}</td>
                          <td>
                            <Link variant="info" to={"/edittrade/" + td.id}>Edit</Link>
                            &nbsp;<Button variant="danger" onClick={() => this.deleteTrade(td.id)}>Delete</Button>
                          </td>
                          </tr>)
                        }
                    </tbody>
            </Table>
           </div>)
    }
    else {
      return (<div>No Record Found</div>)
      }
  }
};
export default TradeList;
