import { useState } from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import api from '../../services/api'

import Imports from '../../utils/Imports'

import {
    Content,
    Form,
    FormTop,
    BtnLogin,
    BtnBack
} from './styles'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function join() {
        if (!email) 
            alert('Você precisa inserir um e-mail!')
        else if (!password)
            alert('Você precisa inserir uma senha!')
        else {
            await api.post('/admin/login', {
                email, password
            })
            .then(response => {
                const { token } = response.data

                localStorage.setItem('token', JSON.stringify(token))
                api.defaults.headers.Authorization = `Bearer ${token}`

                alert('Logado com sucesso!')
                window.location.href="/admin"
            })
            .catch(error => alert(error.response.data.error))
        }
    }

    return(
        <Imports>
            <Content>
                <Form>
                    <FormTop>
                        <Icon icon="wpf:administrator" />
                    </FormTop>
                    <p>E-mail</p>
                    <input 
                        type="email" 
                        placeholder="Insira seu e-mail" 
                        onChange={e => setEmail(e.target.value)} 
                        value={email || ''} 
                    />
                    <p>Senha</p>
                    <input 
                        type="password" 
                        placeholder="Insira sua senha" 
                        onChange={e => setPassword(e.target.value)} 
                        value={password || ''} 
                    />
                    <BtnLogin onClick={join}>Login</BtnLogin>
                    <BtnBack>
                        <Link to="/">
                            Voltar ao portfólio    
                        </Link>
                    </BtnBack>
                </Form>
            </Content>
        </Imports>
    )
}