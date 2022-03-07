import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import {
    Acconunt,
    NameAccount,
    ButtonsAccount,
    BtnGreen,
    BtnRed,
    Line,
} from './styles'

export default function HeaderAdm({ page, nameOrTitle }) {
    const [id, setId] = useState()

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        api.defaults.headers.Authorization = undefined
        window.location.href="/admin/login"
    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
    }, [])

    return(
        <>
            <Acconunt>
                <NameAccount>
                    { page === 'admin' ? <>Bem-vindo, <span>Administrador</span>!</> :
                    page === 'create' ? <>Criando novo <span>{nameOrTitle}</span>.</> :
                    <>Editando: <span>{nameOrTitle}</span>.</> }
                </NameAccount>
                <ButtonsAccount>
                    { page === 'admin' ?
                    <>
                        <Link to={`/admin/edit-admin/${id}`}>
                            <BtnGreen>
                                <span><Icon icon="eos-icons:rotating-gear" inline={true} /></span>
                                Editar conta
                            </BtnGreen>
                        </Link>
                        <BtnRed onClick={logout}>
                            <span>
                                <Icon icon="ls:logout" inline={true} />
                            </span>
                        </BtnRed>
                    </>
                    :
                        <Link to="/admin">
                            <BtnRed>
                                <span>
                                    <Icon icon="bx:bx-arrow-back" inline={true} />
                                </span>
                            </BtnRed>
                        </Link>
                    }
                </ButtonsAccount>
            </Acconunt>
            <Line />
        </>
    )
}