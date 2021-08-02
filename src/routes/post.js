import React, { Component } from "react";
import axios from 'axios';

class Post extends Component {
    state = {
        selectedFile: null,
        filename: null,
        name: '',
        price: ''
    }

    handleChange = (event) => {
        this.setState({
            name: document.getElementById('name').value,
            price: document.getElementById('price').value
        })
    }

    fileSelectedHandler = (event) => {
       let file = event.target.files[0].name;
       this.setState({
           selectedFile: event.target.files[0],
           filename: document.getElementById('file').value
       })
       console.log(file);
    }

    fileUploadHandler = (event) => {

        event.preventDefault();

        let fd = new FormData();

        fd.append('name', this.state.name);
        fd.append('price', this.state.price);
        fd.append('filename', this.state.filename);
        fd.append('file', this.state.selectedFile);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post("http://localhost:3000", fd, config)
        .then (res => {
            console.log(res.data);
            console.log(this.state.name);
            console.log(fd);
        })
    }

    render () {
        return (
            <div>
                <form encType='multipart/form-data'>
                    <input type="text" name="name" id="name" onChange={this.handleChange}/>
                    <input type="number" name="price" id="price" onChange={this.handleChange}/>
                    <input type="file" name="file" id="file" onChange={this.fileSelectedHandler}/>
                    <button onClick = {this.fileUploadHandler}>Add</button>
                </form>

                <div id="data"></div>
            </div>
        )
    }
}

export default Post;