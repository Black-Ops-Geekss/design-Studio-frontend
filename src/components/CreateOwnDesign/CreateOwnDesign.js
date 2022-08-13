import { Component } from "react";
import Card from "./Card";

import CreateDesign from "./CreateDesign";


export default class CreateOwnDesign extends Component {
    render() {
        return (
        <div>
            <CreateDesign />
            <Card />
        </div>
        )
    }
    }