import React ,{Component} from 'react';
import{Card} from 'react-bootstrap';
import Statewise from './Statewise';

import Axios from 'axios';


class India extends Component{

    constructor(){
        super();
        this.state={
            countrydata : {}
        }
    }

    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            
            this.setState({countrydata:response.data });
        });
         
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                     {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src="https://www.countryflags.io/IN/shiny/64.png"/>
                    <h3>India</h3>

                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                        <Card className="badge badge-primary" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>Total Cases </Card.Title>
                                    <h3>{this.state.countrydata.cases} </h3>
                                    <Card.Text>
                                    [+ {this.state.countrydata.todayCases}]
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-warning" style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                    <Card.Title>Active Cases </Card.Title>
                                    <h3>{this.state.countrydata.active}</h3>
                                    <Card.Text>
                                    [critical: {this.state.countrydata.critical}]
                                    </Card.Text>
                                    
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-success" style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                    <Card.Title>Recovered </Card.Title>
                                    <h3>{this.state.countrydata.recovered}</h3>
                                    <Card.Text>
                                        [+ {this.state.countrydata.todayRecovered}]
                                    </Card.Text>
                                    
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-danger" style={{ width: '18rem' }}>
                            <Card.Body className="text-center">
                                    <Card.Title>Total Deaths </Card.Title>
                                    <h3>{this.state.countrydata.deaths}</h3>
                                    <Card.Text>
                                        [+ {this.state.countrydata.todayDeaths}]
                                    </Card.Text>
                                    
                            </Card.Body>
                        </Card>
                        </div>
                    </div>

                </div>
                <div className="col-md-12">
                    <Statewise/>
                </div>
            </div>
        )
    }
}

export default India