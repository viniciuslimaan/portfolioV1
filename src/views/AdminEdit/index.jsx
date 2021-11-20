import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import api from '../../services/api'

import Imports from '../../utils/Imports'
import HeaderAdm from '../../components/HeaderAdm'

import { Form, Button } from './styles'
import { Container } from '../../styles/container'

export default function AdminEdit({ match }) {
    const [id, setId] = useState()
    //Portfólio
    const [title, setTitle] = useState()
    const [type, setType] = useState()
    const [github, setGithub] = useState()
    const [img, setImg] = useState()
    //Admin
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function loadEditDetails() {
        if (match.params.edit && match.params.id) {
            if (match.params.edit === 'portfolio')
                loadPortfolio(match.params.id)
            else if (match.params.edit === 'admin')
                loadAdmin(match.params.id)
            else
                window.location.href="/admin"
        } else
            window.location.href="/admin"
    }

    async function loadPortfolio(id) {
        await api.get(`/portfolio/${id}`)
            .then(response => {
                setId(response.data._id)
                setTitle(response.data.title)
                setType(response.data.type)
                setGithub(response.data.githubLink)
                setImg(response.data.img)
            })
            .catch(error => {
                alert(error.response.data.error)
                window.location.href="/admin"
            })
    }

    async function loadAdmin(id) {
        await api.get(`/admin/${id}`)
            .then((response) => {
                setId(response.data._id)
                setEmail(response.data.email)
            })
            .catch(error => {
                alert(error.response.data.error)
                window.location.href="/admin"
            })
    }

    async function save() {
        if (match.params.edit === 'portfolio') {
            if (!title)
                alert('Você precisa informar o título do portfólio!')
            else if (!type)
                alert('Você precisa informar o tipo do portfólio!')
            else {
                await api.put(`/portfolio/${id}`, {
                    title,
                    type,
                    githubLink: github
                })
                .then(() => {
                    alert('Portfólio editado com sucesso!')
                    window.location.href="/admin"
                })
                .catch(error => alert(error.response.data.error))
            }
        } else if (match.params.edit === 'admin') {
            if (!email)
                alert('Você precisa informar o e-mail do admin!')
            else if (password && password.length < 6)
                alert('A senha precisa ter no mínimo 6 caracters!')
            else {
                await api.put(`/admin/${id}`, {
                    email,
                    password
                })
                .then(() => {
                    alert('Admin editado com sucesso!')
                    window.location.href="/admin"
                })
                .catch(error => alert(error.response.data.error))
            }
        }
    }

    useEffect(() => {
        loadEditDetails()
        // eslint-disable-next-line
    }, [])

    return (
        <Imports>
            <Container>
                <HeaderAdm page="edit" nameOrTitle={ match.params.edit === 'portfolio' ? title : email } /> 
                { match.params.edit === 'portfolio' ?
                    <Form>
                        <p>Título</p>
                        <input type="text" onChange={e => setTitle(e.target.value)} value={title || ''} />
                        <p>Tipo <small>(Selecione apenas se quiser mudar)</small></p>
                        <select onChange={e => setType(e.target.value)}>
                            <option value={type}> Tipo atual: { type === 1 ? 'Arte' : type === 2 ? 'Aplicativo Web' : 'Aplicativo Mobile' }</option>
                            <option value={1}>Arte</option>
                            <option value={2}>Aplicativo Web</option>
                            <option value={3}>Aplicativo Mobile</option>
                        </select>
                        <p>Link do GitHub</p>
                        <input type="text" onChange={e => setGithub(e.target.value)} value={github || ''} />
                        <p>Imagem</p>
                        <img src={process.env.REACT_APP_API_URL + '/images/' + img} alt={title} width="300" height="300" />
                    </Form>
                    :
                    <Form>
                        <p>E-mail</p>
                        <input type="email" onChange={e => setEmail(e.target.value)} value={email || ''} />
                        <p>Senha <small>(Insira a senha apenas caso queira mudar)</small></p>
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password || ''} />
                    </Form>
                }
                <Button onClick={() => save()}>
                    <span><Icon icon="ant-design:save-filled" inline={true} /></span>
                    Salvar
                </Button>
            </Container>
        </Imports>
    )
}