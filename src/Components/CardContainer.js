import React, { Component } from 'react'
import EmployeeCard from "./EmployeeCard"


class CardContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0
        }

    }
    

  render() {
    return  <main>
        <EmployeeCard index={this.state.index} />
        <div className="nav-bar">
        <button onClick={() => {
          if (this.state.index === 0) {
            this.setState({index: 24})
          }
          else {
            this.setState({index: this.state.index - 1})
        }}}className="button-previous">{"< Previous"}</button>
        <button onClick={() => {
          if (this.state.index === 24) {
            this.setState({index: 0})
          }
          else {
            this.setState({index: this.state.index + 1})
        }}}className="button-next">
        {"Next >"}
        </button>
      </div>
    </main>
  
}
}

export default CardContainer
