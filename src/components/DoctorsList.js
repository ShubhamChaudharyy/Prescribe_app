import React,{Component} from 'react'
import axios from 'axios'
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
                    doc:res.data.docname,
                })
        })
    }
    render()
    {
        return(
            <div>
                <p>
                  {this.state.doc} klsdalksbd
                </p>
            </div>
        )
    }
}
export default DoctorsList