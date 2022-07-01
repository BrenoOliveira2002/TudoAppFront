import React, { Component } from "react";
import Pageheader from "../template/pageheader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {
    
    constructor(props) {

        super(props)
        this.state= {description: '', list: []}
        
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {

        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {

        console.log(this.state.description)

        }

    render() {

        return (
            <div>
                <Pageheader name='Tarefas' small='Cadastro'></Pageheader>
                <TodoForm   description={this.state.description}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}

