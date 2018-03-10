import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        datas: {}
    }
    componentDidMount(){
        this.fetchs()
    }
    fetchs = (e) =>{
        axios.get('v2/movie/top250').then(res => JSON.stringify(res)).then((res) => {
            console.log(JSON.parse(res))
            this.setState({
                datas: JSON.parse(res).data
            })
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>axios{this.state.datas.total}</div>
            </div>
        );
    }
}

export default App;
