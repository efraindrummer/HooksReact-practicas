import React, { useEffect, useState } from 'react';
import './effects.css';
import { Mesagge } from './Mesagge';

export const SimpleForm = () => {

    const [formSatate, setFormSatate] = useState({
        name: '',
        email: '',
    })

    const { name, email } = formSatate;

    useEffect( () => {
        //console.log('hey')
        
    }, [])

    useEffect( () => {
        //console.log('formstate cambio')
    }, [formSatate])

    useEffect( () => {
        //console.log('email cambio')
    }, [email])

    const handleInputChange = ({target}) => {
        
        setFormSatate({
            ...formSatate,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Use Effect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            { (name === '123') && <Mesagge />}
        </>
    )
}
