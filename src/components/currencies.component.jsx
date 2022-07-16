import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import CurrencyCard from './currency.card.component'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Currencies = (simplified) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

    return (
        <Fragment>
            <div className="grid grid-cols-4 justify-center items-center">

                {
                    cryptos.map((crypto) => (
                        <Link to={`/currencies/${crypto.uuid}`} >
                            <CurrencyCard data={crypto} />
                        </Link>
                    ))
                }

            </div>

        </Fragment >
    )
}

export default Currencies
