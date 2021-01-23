import React from "react";
import FileBase64 from "react-file-base64";
import styled from "styled-components";
import colours from "./colours.js";
import Jumbotron from "./Jumbotron";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from "@material-ui/core/Button";

const Styles = styled.div`
    .main-wrapper {
        display: flex;
        flex-direction: column;
    }

    .title-wrapper {
        text-align: center;
        font-size: 30px;
        color: ${colours.darkBlue};
        box-sizing: border-box;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .steps {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: ${colours.darkBlue}
    }

    .step {
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .files input {
        outline: 2px dashed ${colours.darkBlue};
        outline-offset: -10px;
        -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
        transition: outline-offset .15s ease-in-out, background-color .15s linear;
        padding: 120px 100px 85px 100px;

        padding-left: 45%;
        padding-right: auto;

        margin: 0;
        width: 100%;
        box-sizing: border-box;
    }

    .files input:focus {
        outline: 2px dashed #92b0b3;
        outline-offset: -10px;
        -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
        transition: outline-offset .15s ease-in-out, background-color .15s linear;
        border: 1px solid #92b0b3;
    }

    .files {
        position: relative;
        width: 100%;
    }

    .files:after {
        pointer-events: none;
        position: absolute;
        top: 60px;
        left: 0;
        width: 50px;
        right: 0;
        height: 56px;
        content: "";
        background-image: url(https://image.flaticon.com/icons/png/128/109/109612.png);
        display: "block";
        margin: 0 auto;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .color input {
        background-color: ${colours.white};
        font-size: 15px;
    }

    .files:before {
        position: absolute;
        bottom: 10px;
        left: 0;
        pointer-events: none;
        width: 100%;
        right: 0;
        height: 57px;
        content: "Click to upload your syllabus or drag it here.";
        display: block;
        margin: 0 auto;
        color: ${colours.darkBlue};
        font-weight: bold;
        text-transform: capitalize;
        text-align: center;
        font-size: 25px;
    }

    .add-button-wrapper {
        display: flex;
        justify-content: center;
    }

    .schedule-wrapper {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding-left: 50px;
        padding-right: 50px;
    }

    .submit-button-wrapper {
        display: flex;
        justify-content: center;
    }

    .button {
        border: 2px solid ${colours.blue};
        box-sizing: border-box;
        padding-left: 10px;
        padding-right: 10px;

        &:hover {
            color: white;
            background-color: ${colours.blue};
        }
    }
`

class Upload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {id: "a", date: "2021-02-14", name: "Quiz 1", weight: "10%"},
                {id: "b", date: "2021-02-18", name: "Quiz 2", weight: "10%"},
                {id: "c", date: "2021-02-22", name: "Quiz 3", weight: "10%"},
                {id: "d", date: "2021-02-28", name: "Quiz 4", weight: "10%"},
            ],
        }

        this.deleteById = this.deleteById.bind(this);
        this.addItem = this.addItem.bind(this);
        this.handleChangeById = this.handleChangeById.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    deleteById(event, id) {
        var index = 0;
        var items = this.state.items;

        for (var i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                index = i;
                break;
            }
        }

        if (index > -1) {
            items.splice(index, 1);
        }

        this.setState( {items: items} );
    }

    addItem() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var id = Date.now() + 1;
        today = yyyy + "-" + mm + "-" + dd;

        var items = this.state.items;
        items.push({date: today, name: "New Time", weight: "0%", id: `${id}`})


        this.setState({ items: items }, () => {
            const anchor = document.querySelector("#submit-button");
            if (anchor) {
                anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        })
    }

    getUniqueKey() {
        var d = new Date();
        return d.toISOString();
    }

    handleChangeById(event, id, field) {
        var items = this.state.items;
        for ( var i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i][field] = event.target.value;
                break;
            }
        }
        this.setState({ items: items });
    }

    handleSubmit(event) {

    }

    render() {
        var items = this.state.items;
        return(
            <Styles>
                <div className="main-wrapper">
                    <Jumbotron />
                    <div className="title-wrapper">
                        <span>A simple schedule builder that uses your syllabus.</span>
                    </div>
                    <div className="steps">
                        <span className="step">1. Upload your syllabus</span>
                        <span className="step">2. Look-over auto-generated calendar</span>
                        <span className="step">3. Add to your calendar</span>
                    </div>
                    <div className="files color">
                        <FileBase64
                        
                        />
                    </div>
                    <div className="add-button-wrapper">
                        <IconButton onClick={this.addItem}>
                            <AddCircleIcon style={{fontSize: "30px"}} />
                        </IconButton>
                    </div>
                    <div className="schedule-wrapper">
                        {items.map((item, index) => {
                            return <ScheduleItem key={item.id} id={item.id} date={item.date} name={item.name} weight={item.weight} onDelete={this.deleteById} onValueChange={this.handleChangeById}/>
                        })}
                    </div>
                    <div className="submit-button-wrapper">
                        <Button className="button" id="submit-button" onClick={this.handleSubmit} >Export to Calendar</Button>
                    </div>
                </div>

            </Styles>

        );
    }
}

const ScheduleStyles = styled.div`
    .main-wrapper {
        border: 2px solid ${colours.blue};
        border-radius: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        flex-direction: row;
        box-sizing: border-box;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .text-fields-wrapper {
        flex-grow: 1;
        display: flex;
        flex-direction: row;

    }

    .text-field {
        flex-grow: 1;
        margin-left: 5px;
        mergin-right: 5px;
    }
`

class ScheduleItem extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
    }

    render() {
        return(
            <ScheduleStyles>
                <div className="main-wrapper">
                    <div>
                        <IconButton onClick={event => this.props.onDelete(event, this.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                    <div className="text-fields-wrapper">
                        <TextField type="date" label="Due Date" variant="outlined" className="text-field" defaultValue={this.props.date} onChange={e => this.props.onValueChange(e, this.id, "date")}/>
                        <TextField label="Name" variant="outlined" className="text-field" defaultValue={this.props.name} onChange={e => this.props.onValueChange(e, this.id, "name")}/>
                        <TextField label="Weight" variant="outlined" className="text-field" defaultValue={this.props.weight} onChange={e => this.props.onValueChange(e, this.id, "weight")}/>
                    </div>
                </div>
            </ScheduleStyles>
        );
    }
}

export default Upload;