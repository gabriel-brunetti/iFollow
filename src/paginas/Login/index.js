import React from 'react'
import './styles.css'
import { FaGithub } from 'react-icons/fa'

class Login extends React.Component{
    state = {
        
    }

    // para o comportamento padrão do formulário de recarregar a página
    maniuplarForm = (evt) => {
        evt.pretendVefault();
    }

    render() {
        return (
            <div className="container">
                <FaGithub className="logo" />
                <h1>iFollow</h1>
                <form>
                    <input type='text' placeholder="Digite seu usuário do github" />
                    <button>Entrar</button>
                </form>
            </div>
        );
    }
    }

export default Login;