import React, { Component } from 'react';
import { render } from 'react-dom';
import List from '../components/list';
import Layout from '../components/layout';

class ToDo extends Component {
  state = {
    term: '',
    items: []
  }
  changeInput =  (event) => {
    this.setState({term: event.target.value});
  }
  submit = (event) =>{
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
    console.log(this.state.items);
  }
  render() {
    return (
      <Layout>
        <form className="form" onSubmit={this.submit}>
          <div className="form-group">
            <input className="form-control" type="text" value={this.state.term} onChange={this.changeInput} />
          </div>
          <input className="btn btn-primary" type="submit" value="Add"/>
        </form>
        <List items={this.state.items}/>
      </Layout>
    )
  }
}
export default ToDo;
