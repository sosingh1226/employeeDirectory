import React, { Component } from 'react';
import 'react-table/react-table.css';
import Table from '../src/Components/Table';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=50').then((response) => response.json()).then((data) => {
      this.setState({ data });
    });
  }

  render() {
    return <div className="home">{this.state.data && <Table employees={this.state.data} />}</div>;
  }
}
