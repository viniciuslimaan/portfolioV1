import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import api from '../../services/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Imports from '../../utils/Imports'
import HeaderAdm from '../../components/HeaderAdm'

import {
    Row,
    Card,
    Table,
    BtnFuction,
    BtnCreate
} from './styles'

import { Container } from '../../styles/container'

export default function Admin() {
    const [whichShow, setWhichShow] = useState('portfolio')
    const [admins, setAdmins] = useState([])
    const [portfolios, setPortfolios] = useState([])

    async function loadPortfolio() {
        await api.get('/portfolio/')
            .then(response => {
                setPortfolios(response.data)
            })
            .catch(error => {
                console.log('Erro: ' + error.response.data.error)
            })
    }

    async function loadAdmins() {
        await api.get('/admin')
            .then(response => {
                setAdmins(response.data)
            })
            .catch(error => {
                console.log('Erro: ' + error.response.data.error)
            })
    }

    async function remove(id, type) {
        const confirmation = window.confirm('Deseja realmente excluir?')

        if (confirmation) {
            if (type === 'portfolio') {
                await api.delete(`/portfolio/${id}`)
                    .then(() => {
                            alert('Excluído com sucesso!')
                            window.location.reload()
                        })
                    .catch(error => toast.error('Não foi possível excluir. Erro: ' + error.response.data.error))
            } else if (type === 'admin') {
                await api.delete(`/admin/${id}`)
                    .then(() => {
                            alert('Excluído com sucesso!')
                            window.location.reload()
                        })
                    .catch(error => toast.error('Não foi possível excluir. Erro: ' + error.response.data.error))
            }
        }
    }

    useEffect(() => {
        loadPortfolio()
        loadAdmins()
    }, [])

    return (
        <Imports>
            <Container>
                <HeaderAdm page="admin" />
                <h4>Dashboard</h4>
                <Row>
                    <Card onClick={() => setWhichShow('portfolio')}>
                        <span><Icon icon="ic:baseline-work" inline={true} /></span>
                        Portfólios
                    </Card>
                    <Card onClick={() => setWhichShow('admin')}>
                        <span><Icon icon="wpf:administrator" inline={true} /></span>
                        Admins
                    </Card>
                </Row>
                <h4>{ whichShow === 'portfolio' ? 'Portfólios' : 'Admins' }</h4>
                <Table>
                    <thead>
                        <tr>
                            {
                                whichShow === 'portfolio' ?
                                <>
                                    <td>Título</td>
                                    <td>Tipo</td>
                                </>
                                : <td>E-mail</td>
                            }
                            <td>Funções</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        whichShow === 'portfolio' ?
                        //LoadPortfólios
                        portfolios.map(data => (
                            <tr key={ data._id }>
                                <td>{ data.title }</td>
                                <td>{ data.type === 1 ? 'Arte' : data.type === 2 ? 'Aplicativo Web' : 'Aplicativo Mobile' }</td>
                                <td>
                                    <Link to={`/admin/edit-portfolio/${data._id}`}>
                                        <BtnFuction edit>
                                            <Icon icon="raphael:smallgear" inline={true} />
                                        </BtnFuction>
                                    </Link>
                                    <BtnFuction del onClick={() => remove(data._id, 'portfolio')}>
                                        <Icon icon="fluent:delete-24-filled" inline={true} />
                                    </BtnFuction>
                                </td>
                            </tr>
                        ))
                        :
                        //LoadAdmins
                        admins.map(data => (
                            <tr key={ data._id }>
                                <td>{ data.email }</td>
                                <td>
                                    <Link to={`/admin/edit-admin/${data._id}`}>
                                        <BtnFuction edit>
                                            <Icon icon="raphael:smallgear" inline={true} />
                                        </BtnFuction>
                                    </Link>
                                    <BtnFuction del onClick={() => remove(data._id, 'admin')}>
                                        <Icon icon="fluent:delete-24-filled" inline={true} />
                                    </BtnFuction>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
                <Link to={ whichShow === 'portfolio' ? '/admin/add-portfolio' : '/admin/add-admin' }>
                    <BtnCreate>
                        <span><Icon icon="fluent:add-circle-16-filled" inline={true} /></span>
                        { whichShow === 'portfolio' ? 'Adicionar Portfólio' : 'Adicionar Admin' }
                    </BtnCreate>
                </Link>
                <ToastContainer position='bottom-right' />
            </Container>
        </Imports>
    )
}