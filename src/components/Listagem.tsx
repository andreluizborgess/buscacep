import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from "../app.module.css"
import { cadastroInterface } from '../interfaces/cadastroInterface';
import axios from 'axios';
const Listagem = () => {
    const [usuarios, setUsuarios] = useState<cadastroInterface[]>([])
    const [error, setError] = useState("");
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.9.132:8000/api/find')
                setUsuarios(response.data.data);
            } catch (error) {
                ;
                setError("ocorreu um erro")
                console.log(error);
            }

        }
        fetchData();
    }, []);
    return (
        <div>
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Listagem de usuarios
                            </h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>nome</th>
                                        <th>cpf</th>
                                        <th>email</th>
                                        <th>ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map(usuario =>(
                                    <tr key={usuario.id}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.cpf}</td>
                                        <td>{usuario.email}</td>
                                        <td>
                                            <a href='#' className='btn btn-primary btn-sm'>editar</a>
                                            <a href='#' className='btn btn-danger btn-sm'>excluir</a>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
export default Listagem;