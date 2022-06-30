import React, { Component } from "react";
import Pageheader from "../template/pageheader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class Todo extends Component {

    render() {

        return (
            <div>
                <Pageheader name='Tarefas' small='Cadastro'></Pageheader>
                <TodoForm />
                <TodoList />
                
            </div>
        )
    }
}

