import React from 'react';
import ReactDom from 'react-dom';
import Form from './Form';
import Grid from './Grid';

class Index extends React.Component
{
    constructor() {

        super();

        this.state = {
            tarefa: "",
            tarefas: []
        }
    }
   

    adicionar = () => {

        if (this.state.tarefa != "") {

            let tarefas = this.state.tarefas;
            tarefas.push(this.state.tarefa);

            this.setState({
                tarefa: "",
                tarefas: tarefas
            });

        }
    }

    excluir = (index) => {

        let tarefas = this.state.tarefas;
        tarefas.splice(index, 1);

        this.setState({
            tarefas
        });
        
    }

    render = () => {
        
        let saida = 
           <div>
                <Form pai={this} />
                <Grid pai={this} />

           </div>
        return saida;
    }
}

export default Index;

ReactDom.render(<Index/>, document.getElementById("root"));