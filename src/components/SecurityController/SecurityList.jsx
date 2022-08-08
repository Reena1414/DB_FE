import React,{Component} from "react";
import { Table, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {hostNameUrl} from '../../config/api'
import '../../bootstrap-4.3.1/bootstrap-4.3.1/dist/css/bootstrap.min.css'


class SecurityList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        security: [],
        IsApiError:false
    }
  }

  componentDidMount() {
    fetch(hostNameUrl+ "/security/")
        .then(res => res.json())
        .then(
            (result) => {
                debugger;
                this.setState({
                    security: result
                });
            },
            (error) => {
                this.setState({ IsApiError: true });
            }
        )
}
    deleteSecurity(Id){
      const { security } = this.state;
      const apiUrl = hostNameUrl + "/security?id="+Id;

      fetch(apiUrl, { method: 'DELETE' })
      .then(async response => {
          const data = await response.json();
          if (!response.ok) {
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
          this.setState({
              security: security.filter(sc => sc.Id !== Id)
          });
          alert('Delete successful');
      })
      .catch(error => {
          alert('There was an error!');
          console.error('There was an error!', error);
      });
  }
  render() {
    var securitylist=this.state.security;
    if (securitylist && securitylist.length > 0) {
      return (<div>
          <h2>Security List</h2>
          <Link variant="primary" to="/addsecurity">Add Security</Link>
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
                          <tr key={sc.Id}>
                          <td>{sc.Id}</td>
                          <td>{sc.ISIN} </td>
                          <td>{sc.CUSIP}</td>
                          <td>{sc.Issuer}</td>
                          <td>{sc.MaturityDate}</td>
                          <td>{sc.Coupon}</td>
                          <td>{sc.Type}</td>
                          <td>{sc.FaceValue}</td>
                          <td>{sc.Status}</td>
                          <td>
                            <Link variant="info" to={"/editsecurity/" + sc.Id}>Edit</Link>
                            &nbsp;<Button variant="danger" onClick={() => this.deleteSecurity(sc.Id)}>Delete</Button>
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
export default SecurityList;