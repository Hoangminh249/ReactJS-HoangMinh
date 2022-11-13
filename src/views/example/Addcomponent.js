import React from "react";

class Addcomponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangeTitleJobs = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if (!this.state.title || !this.state.salary) {
      alert("miss");
      return;
    }

    e.preventDefault();
    console.log("check data", this.state);

    
    this.props.addJobs({
      id: Math.random(),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            onChange={(e) => this.handleChangeTitleJobs(e)}
            type="text"
            value={this.state.title}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            onChange={(e) => this.handleChangeSalary(e)}
            type="number"
            value={this.state.salary}
          />
          <br />
          <input
            onClick={(e) => this.handleSubmit(e)}
            type="button"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default Addcomponent;
