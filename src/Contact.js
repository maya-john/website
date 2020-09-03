import React, {Component} from "react";
import axios from 'axios';
import ParticlesBg from "particles-bg";

class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        sent: false
    }

    handleSubmit(e) {
        e.preventDefault()

        let data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        axios.post('API_URI', data)
            .then( res => {
                this.setState({sent: true}, this.resetForm())
            })
            .catch( () => {
                console.log('message not sent')
            })

        const resetForm = () => {
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }
    }

    onNameChange(e) {
        this.setState({name: e.target.value})
    }

    onEmailChange(e) {
        this.setState({email: e.target.value})
    }

    onSubjectChange(e) {
        this.setState({subject: e.target.value})
    }

    onMessageChange(e) {
        this.setState({message: e.target.value})
    }

    render () {
        return (
            <div className="container vert-center">
                <form onSubmit={this.handleSubmit} id="contact-form">
                    <div className="input-field">
                        <label htmlFor="name">name</label>
                        <input onChange={this.onNameChange} id='name' type="text" className="validate orange-text" required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">email address</label>
                        <input onChange={this.onEmailChange} id='email' type="email" className="validate orange-text" required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="subject">subject</label>
                        <input onChange={this.onSubjectChange} id='subject' type="text" className="validate orange-text" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="message">message</label>
                        <textarea onChange={this.onMessageChange} id='message' className="materialize-textarea orange-text" data-length='500' required/>
                    </div><br />
                    <button type="submit" className="btn-large lower z-depth-2 grey darken-4 orange-text none">submit</button>
                </form>
                <ParticlesBg type='cobweb' bg={true} color='#ff9800'/>
            </div>
        );
    }
}

export default Contact;