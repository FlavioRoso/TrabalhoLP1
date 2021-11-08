import React from 'react';
import ReactDom from 'react-dom';
import HTTPClient from '~/components/HTTPClient.js';

class Login extends React.Component {
    constructor() {

        super();

        this.state = {
            login: "",
            senha: "",
            msg: "",
            sucesso: false
        }
    }

    salvar = (e) => {
        e.preventDefault();

        if (this.state.login.trim() == "" ||
            this.state.senha.trim() == "") {
            this.setState({
                msg: "Dados obrigatórios",
                sucesso: false
            })
        }
        else {

            let dados = {
                login: this.state.login,
                senha: this.state.senha
            }

            HTTPClient.post("/painel/login/autenticar", dados)
                .then(r => r.json())
                .then(r => {

                    if (r.sucesso) {
                        location.href = "/painel/dashboard";
                    }
                    else {

                        this.setState({
                            msg: r.msg,
                            sucesso: r.sucesso
                        });
                    }
                })
                .finally(() => {
                });

        }
    }

    renderForm = () => {

        let msg = null;

        if (!this.state.sucesso) {
            msg = <div style={{ color: "red" }}>{this.state.msg}</div>
        }
        else {
            msg = <div style={{ backgroundColor: "green", color: "white" }}>{this.state.msg}</div>
        }

        // let saida = 
        // <div className="card">
        //     <div className="card-body login-card-body">
        //         <p className="login-box-msg">Sign in to start your session</p>

        //         <form action="/Login/Autenticar" method="post">
        //             <div className="input-group mb-3">
        //                 <label forHTML="txNome">NOme</label>
        //                 <input name="nome" id="txNome"
        //                     type="text" 
        //                     class="form-control" placeholder="Email"
        //                     value={this.state.nome} 
        //                     onChange={(e) => this.setState({nome: e.target.value})}
        //                  />
        //                 <div className="input-group-append">
        //                     <div className="input-group-text">
        //                         <span className="fas fa-envelope"></span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="input-group mb-3">
        //                 <input name="senha" type="password" 
        //                     className="form-control" placeholder="Password" 
        //                     value={this.state.senha}
        //                     onChange={(e) => this.setState({senha: e.target.value}) } />
        //                 <div class="input-group-append">
        //                     <div class="input-group-text">
        //                         <span class="fas fa-lock"></span>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="row">

        //                 <div class="col-12">
        //                     <button type="button" onClick={this.salvar} className="btn btn-primary btn-block">Entrar</button>
        //                 </div>
        //             </div>
        //              {msg}
        //         </form>
          
        //     </div>
        // </div>

        return (
            <form className="md-float-material form-material" id="form-login" onSubmit={(e) => this.salvar(e)}>

                <div className="auth-box card">

                    <div className="card-block">
                        <div className="row m-b-20">
                            <div className="col-md-12">
                                <h3 className="text-center">Sign In</h3>
                            </div>
                        </div>
                        <div className="form-group form-primary">
                            <input type="text" name="login" className="form-control" required
                                placeholder="Your Email Address"
                                value={this.state.login}
                                onChange={(e) => this.setState({ login: e.target.value })}
                                />
                            <span className="form-bar"></span>
                        </div>
                        <div className="form-group form-primary">
                            <input type="password" id="senha" name="senha" className="form-control" required
                                placeholder="Password"
                                value={this.state.senha}
                                onChange={(e) => this.setState({ senha: e.target.value })} 
                                 />
                            <span className="form-bar"></span>
                        </div>

                        <div className="row m-t-30">
                            <div className="col-md-12">
                                <button type="submit"
                                    className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20"
                                    
                                    >Sign
                                    in</button>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-10">
                                <p className="text-inverse text-left m-b-0">Thank you.</p>
                                <p className="text-inverse text-left"><a href="/"><b className="f-w-600">Back to
                                    website</b></a></p>
                            </div>
                            <div className="col-md-2">
                                <img src="/templates/adminty/files/assets/images/auth/Logo-small-bottom.png"
                                    alt="small-logo.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
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