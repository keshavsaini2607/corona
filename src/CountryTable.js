import React from 'react'
import './CountryTable.css'
import numeral from 'numeral'

function CountryTable({countries}) {
    return (
        <div className="table">
            {countries.map(({country,cases}) => (
                <tr>
                    <td>{country}</td>
                    <td>
                        <strong>{numeral(cases).format('0,0')}</strong>
                    </td>
                </tr>
            ))}
        </div>
    )
}

export default CountryTable
