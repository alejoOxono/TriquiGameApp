import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRecords } from '../../Actions/actionsCreators';
import Nav from '../Nav/Nav'
import dateFormat from "dateformat";
import './Records.scss'

function Records() {

    const dispatch = useDispatch();
    const copyData = useSelector((state) => state.copyData);
    var contador = 0;

    useEffect(() => {
        dispatch(getRecords())
    }, [])

    return (
        <>
            <div className="content-nav">
                <Nav />
            </div>
            <div className="content-tabla">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Winner</th>
                            <th>Losser</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            copyData ?
                                copyData.map((el) => {
                                    let fecha = dateFormat(el.createdAt, "mmmm\t dd\t yyyy\t h:MM TT");
                                    return (
                                        <tr key={el.id}>
                                            <td key={el.id + contador}>{++contador}</td>
                                            <td key={el.id + el.winner}>{el.winner}</td>
                                            <td key={el.id + el.losser + contador}>{el.losser}</td>
                                            <td key={el.id + el.id}>{fecha}</td>
                                        </tr>
                                    )
                                })
                                :
                                <></>
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Records