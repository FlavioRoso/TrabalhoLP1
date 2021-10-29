import React from 'react';

class Form extends React.Component
{
    constructor(props) {

        super(props);

        this.state = {}
    }
   
    render = () => {
        
        let saida = 
           <div style={{marginBottom:50}}>
               <input type="text" 
                value={this.props.pai.state.tarefa} 
                onChange={(e) => this.props.pai.setState({tarefa: e.target.value})}
                />
               <button type="button" onClick={this.props.pai.adicionar} >+</button>
           </div>
        return saida;
    }
}

export default Form;