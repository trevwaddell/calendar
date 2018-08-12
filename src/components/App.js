import React from "react";

import Calendar from "./Calendar";
import Week from "./Calendar/Week";

class App extends React.Component {
  constructor() {
    super();

    this.changethedamndate = this.changethedamndate.bind(this);

    this.state = {
      date: new Date(2018, 7, 22)
    };
  }

  changethedamndate(date) {
    console.log({ date });
    this.setState({ date });
  }

  render() {
    return <Calendar date={this.state.date} onDateChange={() => true} />;
  }
}

export default App;
