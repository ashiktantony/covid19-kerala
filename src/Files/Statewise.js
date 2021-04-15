import React, { Component } from "react";
import Axios from "axios";
import { Accordion, Button, Card } from "react-bootstrap";

class Statewise extends Component {
  constructor() {
    super();
    this.state = {
      statedata: {},
      dailydata: {},
    };
  }

  componentDidMount() {
    Axios.get("https://api.covid19india.org/state_district_wise.json").then(
      (response) => {
        this.setState({ statedata: response.data });
      }
    );
    // Axios.get("https://api.covid19india.org/data.json").then(response=>{

    //  this.setState({dailydata:response.data });
    //});
  }

  render() {
    let keysday = Object.keys(this.state.dailydata);

    let keys = Object.keys(this.state.statedata);
    return (
      keysday.map((itm, k) => {
        if(itm==="Kerala")
        {
            let x=0;
        }
      }),
      (
        <div className="row">
          <div className="col-md-12">
            <Accordion>
              {keys.map((itm, k) => {
                if (itm === "Kerala") {
                  let districts = this.state.statedata[itm].districtData;
                  let dist_keys = Object.keys(districts);

                  let total_active = 0;
                  //let today_confirmed=0;
                  //let today_deaths=0;
                  //let today_recovered=0;
                  let total_confirmed = 0;
                  let total_deaths = 0;
                  let total_recovered = 0;

                  let district_list = [];

                  for (let i in districts) {
                    // to get statewise sum
                    total_active += districts[i].active;
                    total_confirmed += districts[i].confirmed;
                    total_deaths += districts[i].deceased;
                    total_recovered += districts[i].recovered;

                    //today_confirmed=districts[i].delta.confirmed;
                    let x = districts[i]; // to get district wise
                    x["district_nam"] = i;
                    x["today_confirmed"] = districts[i].delta.confirmed;
                    x["today_recovered"] = districts[i].delta.recovered;
                    x["today_deaths"] = districts[i].delta.deceased;

                    district_list.push(x);
                  }
                  //console.log(district_list);

                  return (
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="primary"
                          eventKey={k}
                        >
                          {itm} -{" "}
                          <span className="btn-light p-1 mr-2">
                            Total Cases-{total_confirmed}
                          </span>{" "}
                          <span className="btn-light p-1 mr-2">
                            Active-{total_active}
                          </span>{" "}
                          <span className="btn-light p-1 mr-2">
                            Recovered-{total_recovered}
                          </span>{" "}
                          <span className="btn-light p-1 mr-2">
                            Deaths-{total_deaths}
                          </span>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={k}>
                        <Card.Body>
                          <table className="table table-bordered table">
                            <thead>
                              <tr>
                                <td>District</td>
                                <td>Confirmed</td>
                                <td>Active</td>
                                <td>Recovered</td>
                                <td>Deaths</td>
                              </tr>
                            </thead>
                            <tbody>
                              {district_list.map((itm, k) => {
                                return (
                                  <tr>
                                    <td>{itm.district_nam}</td>
                                    <td>
                                      {itm.confirmed} [+{itm.today_confirmed}]
                                    </td>
                                    <td>{itm.active}</td>
                                    <td>
                                      {itm.recovered} [+{itm.today_recovered}]
                                    </td>
                                    <td>
                                      {itm.deceased} [+{itm.today_deaths}]
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  );
                }
              })}
            </Accordion>
          </div>
        </div>
      )
    );
  }
}

export default Statewise;
