import React,{Component} from "react";
import { Table, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {hostNameUrl} from '../../config/api'



class SecurityList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        security: [],
        IsApiError:false
    }
  }

  componentDidMount() {
    fetch(hostNameUrl+ "/securities")
        .then(res => res.json())
        .then(
            (result) => {
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
      const baseurl = hostNameUrl + "/security-delete/"+Id;

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
            security: security.filter(sc => sc.id !== Id)
          });
          alert('Delete successful');
        
        })
        .catch((e) => {
            alert(e);
        });
  }
  render() {
    var securitylist=this.state.security;
    console.log(this.state.security)
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
            </Table>
           </div>)
    }
    else {
      return (<div>No Record Found</div>)
      }
  }
};
export default SecurityList;