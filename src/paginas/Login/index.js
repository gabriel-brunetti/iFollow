import React from 'react'
import './styles.css'
import { FaGithub } from 'react-icons/fa'

class Login extends React.Component{
    state = {
        usuario: ''
    }

    // para salvar o que for digitado no input do form
    manipularInput = (evt) => {
        this.setState({usuario: evt.target.value});
    }

    manipularForm = (evt) => {
        // para o comportamento padrão do formulário de recarregar a página
        evt.preventDefault();

        // funciona como um redirect
        this.props.history.push(`/seguidores/${this.state.usuario}`);
    }

    render() {
        return (
            <div className="container">
                <FaGithub className="logo" />
                <h1>iFollow</h1>
                {/* AGREGAR O manipularFORM ao FROM */}
                <form onSubmit={this.manipularForm}>
                    <input onInput={this.manipularInput} type='text' placeholder="Digite seu usuário do github" />
                    <button>Entrar</button>
                </form>
            </div>
        );
    }
    }

export default Login;