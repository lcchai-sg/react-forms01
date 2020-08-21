import React, { Component } from 'react';

class simpleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      taskErr: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.data === '')
      this.setState({ taskErr: "Task cannot be empty!" });
    else {
      console.log('task >', this.state.data);
      this.setState({ data: "", taskErr: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="task">
            Add Task
        </label>
          <input onChange={(e) => this.setState({ data: e.target.value, taskErr: "" })} value={this.state.data} id="task" className="form-control" />
          <p>{this.state.taskErr}</p>
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    );
  }
}

export default simpleForm;