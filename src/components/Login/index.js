import { Component } from "react"
import "./index.css"

class Login extends Component{
    state={name:"",password:""}
    user=event => {
        this.setState({name:event.target.value})
    }
    pass = event => {
        this.setState({password:event.target.value})
    }

    subm= async event => {
        event.preventDefault();
        const {name,password}=this.state
        const url="http://localhost:5000/login"
        const userDetails={name,password}
        const options={method:"POST",
            body:JSON.stringify(userDetails),
        }
        const response=await fetch(url,options)
        if(response.ok){
            console.log(response)
            console.log("success")
        }
        else{
            const {history}=this.props
            history.replace("/")
            console.log("failed")
        }
    }
    render() {
        const {name,password}=this.state
        return (
            <div>
                <form onSubmit={this.subm}>
                    <input onChange={this.user} type="text" value={name}></input>
                    <input onChange={this.pass} type="password" value={password}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login