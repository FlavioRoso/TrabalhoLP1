import React from 'react';
import ReactDom from 'react-dom';
class Login extends React.Component
{
    constructor() {

        super();

        this.state = {
            nome: "sss",
            senha: "",
            msg: "",
            sucesso: false  
        }
    }

    salvar = () => {

        if (this.state.nome.trim() == "" || 
            this.state.senha.trim() == "") 
            {
                this.setState({
                    msg: "Dados obrigatórios",
                    sucesso: false
                })
            }
        else {
            this.setState({
                msg: "Dados OK",
                sucesso: true
            })
        }
    }

    renderForm = () => {

        let msg = null;

        if (!this.state.sucesso)
        {
            msg = <div style={{color: "red"}}>{this.state.msg}</div>
        }
        else 
        {
            msg = <div style={{backgroundColor: "green", color:"white"}}>{this.state.msg}</div>
        }

        let saida = 
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form action="/Login/Autenticar" method="post">
                        <div className="input-group mb-3">
                            <label forHTML="txNome">NOme</label>
                            <input name="nome" id="txNome"
                                type="text" 
                                class="form-control" placeholder="Email"
                                value={this.state.nome} 
                                onChange={(e) => this.setState({nome: e.target.value})}
                             />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input name="senha" type="password" 
                                className="form-control" placeholder="Password" 
                                value={this.state.senha}
                                onChange={(e) => this.setState({senha: e.target.value}) } />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-12">
                                <button type="button" onClick={this.salvar} className="btn btn-primary btn-block">Entrar</button>
                            </div>
                        </div>
                         {msg}
                    </form>
              
                </div>
            </div>

        return saida;
    }

    render = () => {
        
        let saida = 
           <div>
               <div>
                    {this.renderForm()}
               </div>

           </div>
        return saida;
    }
}

export default Login;


ReactDom.render(<Login />, document.getElementById("root"));