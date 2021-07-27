import React, {Component} from 'react';
import axios from 'axios';

class Delete extends Component {
    state = {
        id: ''
    }

    handleChange = (event) => {
        this.setState({
            id: document.getElementById('product_id').value
        })
    }

    handleInput = (event) => {
        event.preventDefault();

        axios.delete(`https://test-nodejs-api-with-free-db.herokuapp.com/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render () {
        return (
            <div>
                <form onSubmit = {this.handleInput}>
                    <input type="text" name="name" placeholder="Enter ID to delete" id="product_id" onChange={this.handleChange} />
                    <button type = "submit">Delete</button>
                </form>
            </div>
        )
    }
}

export default Delete;