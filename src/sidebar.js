import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Home from "./Home";
// import DataList from "./DataList";
// import UpdateList from "./UpdateList";
// import AddUser from "./AddUser";

import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

class SideBar extends Component {
  render() {
    return (
        <SideNav
        onSelect={(selected) => {
            // Add your code here
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Calendar
                </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText>
                        Reminder
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        Sc
                    </NavText>
                </NavItem>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    );
  }
}

export default SideBar;
