import React, { Component } from "react";
import Pageheader from "../template/pageheader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {
    
    constructor(props) {

        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {

        console.log('Add')
    }

    render() {

        return (
            <div>
                <Pageheader name='Tarefas' small='Cadastro'></Pageheader>
                <TodoForm   handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}

