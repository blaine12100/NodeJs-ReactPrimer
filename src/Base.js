// src/App.js

import React from "react";
import { Link, Redirect } from 'react-router-dom'
import API from "./API"
import MaterialTable from "material-table";

class Base extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isloading: true,
            name: "Dhruv Marwha",
            url: "https://www.bavarealtors.in/wp-content/uploads/2019/11/dummy-man-570x570.png",
            email: "marwha.dhruv@gmail.com",
            data: []
        }

    }

    componentDidMount() {

        API.get('/search').then(response => {
            console.log(response)

            // for (var index = 0; index < response['data'].length; index++) {
            //   console.log(response['data'][index])

            // }

            this.setState({ "data": response.data })

        })

        // userData = userData.data.results[0];

        // // Update state with new data and re-render our component.
        // const name = `${userData.name.first} ${userData.name.last}`;
        // const avatar = userData.picture.large;
        // const email = userData.email;

        // this.setState({
        //   ...this.state, ...{
        //     isLoading: false,
        //     name,
        //     avatar,
        //     email
        //   }
        // });

    }

    handle_route(data) {
        return <Redirect
            to={{
                pathname: "/battle",
                state: { battle_data: data }
            }}
        />
    }

    render() {
        console.log(this.state.data)
        return (
            <div style={{ maxWidth: "100%" }}>
                <MaterialTable
                    options={{ sorting: true, search: true }}
                    actions={[
                        {
                            icon: 'save',
                            tooltip: 'Save User',
                            onClick: (event, rowData) => {
                                console.log(event, rowData)
                                this.handle_route(rowData)
                                // Redirect to the User Component With the required props(The Name,clan,region of the battle etc)
                            }
                        }
                    ]}
                    columns={[
                        { title: "Name", field: "name" },
                        { title: "Year Of Battle", field: "year", type: "numeric" },
                        { title: "Battle Number", field: "battle_number", type: "numeric" },
                        { title: "Attacking king", field: "attacker_king" },
                        { title: "Defending king", field: "defender_king" },
                        { title: "First Attacker", field: "attacker_1" },
                        { title: "Second Attacker", field: "attacker_2" },
                        { title: "Third Attacker", field: "attacker_3" },
                        { title: "Fourth Attacker", field: "attacker_4" },
                        { title: "First Defender", field: "defender_1" },
                        { title: "Second Defender", field: "defender_2" },
                        { title: "Third Defender", field: "defender_3" },
                        { title: "Fourth Defender", field: "defender_4" },
                        { title: "Battle Outcome", field: "attacker_outcome" },
                        { title: "Type of Battle", field: "battle_type" },
                        { title: "Major Death", field: "major_death" },
                        { title: "Major Capture", field: "major_capture" },
                        { title: "Size of Attacker", field: "attacker_size", type: "numeric" },
                        { title: "Size of Defender", field: "defender_size", type: "numeric" },
                        { title: "Attacking Commander", field: "attacker_commander" },
                        { title: "Defending Commander", field: "defender_commander" },
                        { title: "Summer of Battle", field: "summer", type: "numeric" },
                        { title: "Location of the Battle", field: "location" },
                        { title: "Region of the Battle", field: "region" },
                        { title: "Important Notes", field: "note" },
                    ]}
                    data={this.state.data}
                    title="Game of Thrones Battle App"
                />
            </div>
        );
    }
}

export default Base;
// return <User isloading={this.state.isloading} name={this.state.name} avatar={this.state.url} email={this.state.email} />;