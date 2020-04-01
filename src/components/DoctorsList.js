import React,{Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './css/Doctor.css'
class DoctorsList extends Component{
    state={
        doc:'',
        docId:'',
        fee:'',
        slot:''
    }
    componentDidMount()
    {
        axios.get('http://localhost:5000/getData').then(res=>{
                this.setState({
                    doc:res.data.doctor,
                    fee:res.data.fee,
                    slot:res.data.slot
                })
        })
    }
    render()
    {
        return(
            
           <Link to="/PatientDets"> 
           <div className="container">
           <div className="details-doctor">
                <div>{this.state.doc}</div>
                <div>{this.state.fee}</div>
                <div>{this.state.slot}</div>
               
            </div>
            
            </div>
            </Link>
        )
    }
}
export default DoctorsList