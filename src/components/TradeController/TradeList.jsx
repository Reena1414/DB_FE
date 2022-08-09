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

  componentDidMount(props) {
    fetch(hostNameUrl+ "/trade/"+this.props.match.params.id)
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
    deleteTrade(Id){
      const { trade } = this.state;
      const apiUrl = hostNameUrl + "/trade?id="+Id;

      fetch(apiUrl, { method: 'DELETE' })
      .then(async response => {
          const data = await response.json();
          if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
          this.setState({
              trade: trade.filter(td => td.id !== Id)
          });
          console.log(trade)
          alert('Delete successful');
      })
      .catch(error => {
          alert('There was an error!');
          console.error('There was an error!', error);
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
