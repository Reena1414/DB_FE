import React,{Component} from "react";
import { Table, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {hostNameUrl} from '../../config/api'
import '../../bootstrap-4.3.1/bootstrap-4.3.1/dist/css/bootstrap.min.css'

class TradeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        trade: [],
        IsApiError:false
    }
  }

  componentDidMount() {
    fetch(hostNameUrl+ "/trade/")
        .then(res => res.json())
        .then(
            (result) => {
                debugger;
                this.setState({
                    trade: result
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
              trade: trade.filter(td => td.Id !== Id)
          });
          alert('Delete successful');
      })
      .catch(error => {
          alert('There was an error!');
          console.error('There was an error!', error);
      });
  }
  render() {
    var tradelist=this.state.trade;
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
                          <tr key={td.Id}>
                          <td>{td.Id}</td>
                          <td>{td.BookId} </td>
                          <td>{td.CounterPartyId}</td>
                          <td>{td.SecurityId}</td>
                          <td>{td.Quantity}</td>
                          <td>{td.Status}</td>
                          <td>{td.Price}</td>
                          <td>{td.Buy_Sell}</td>
                          <td>{td.TradeDate}</td>
                          <td>{td.SettlementDate}</td>
                          <td>
                            <Link variant="info" to={"/edittrade/" + td.Id}>Edit</Link>
                            &nbsp;<Button variant="danger" onClick={() => this.deleteTrade(td.Id)}>Delete</Button>
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
