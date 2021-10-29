import React from 'react';

class Grid extends React.Component
{
    constructor(props) {

        super(props);
      
    }
   

    render = () => {
        
        let saida = null; 

        if (this.props.pai.state.tarefas.length == 0)
        {
            saida = <div>Sem tarefas.</div>
        }
        else 
        {
            saida = 
           <table>
               {this.props.pai.state.tarefas.map((item, index) => {
                   
                   return (
                         <tr>
                            <td>{item}</td>
                            <td>
                                <button onClick={() => this.props.pai.excluir(index)}>X</button>
                            </td>
                        </tr> );
               })}
             
          </table>
        }
        
        return saida;
    }
}

export default Grid;