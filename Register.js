import React, {Component} from 'react'
import {register} from './UserFunctions'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setSttate({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
            if(res) {
                this.props.history.push('/login')
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Please sign in!
                            </h1>
                            <div className="form-group">
                                <label htmlFor="first_name">
                                    First name
                                </label>
                                <input type="text" className="form-control" name="first_name" placeholder="Enter first name" value={this.state.first_name} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">
                                    Last name
                                </label>
                                <input type="text" className="form-control" name="last_name" placeholder="Enter last name" value={this.state.last_name} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email address
                                </label>
                                <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email address
                                </label>
                                <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input type="text" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange}/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register