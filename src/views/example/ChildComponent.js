import React from "react";
import "./demo.scss";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleDelete = (job) => {
    this.props.deleteJob(job);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;

    return (
      <>
        {showJobs === false ? (
          <div>
            <button style={{
              color: 'red'
            }} onClick={() => this.handShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="list-Jobs">
              {arrJobs.map((e, i) => {
                if (e.salary >= 500) {
                  return (
                    <div key={e.id}>
                      {e.title} - {e.salary} $ <></>{" "}
                      <span onClick={() => this.handleDelete(e)}>x</span>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <button onClick={() => this.handShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
