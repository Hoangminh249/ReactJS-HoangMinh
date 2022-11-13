import React from "react";
import ChildComponent from "./ChildComponent";
import Addcomponent from "./Addcomponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: 1, title: "dev", salary: 300 },
      { id: 2, title: "test", salary: 400 },
      { id: 3, title: "manage", salary: 500 },
    ],
  };

  addJobs = (job) => {
    console.log("test job", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteJob = (job) => {
    let currentData = [
      ...this.state.arrJobs.filter((item) => item.id !== job.id),
    ];
    this.setState({
      arrJobs: currentData,
    });
  };

  componentDidUpdate(prveProps, prveState){
    console.log('GD2', prveState, 'GD3', this.state);
  }

  componentDidMount() {
    console.log('GD1');
  }

  render() {
    return (
      <>
        <Addcomponent addJobs={this.addJobs} />
        <ChildComponent
          deleteJob={this.deleteJob}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}
export default MyComponent;
