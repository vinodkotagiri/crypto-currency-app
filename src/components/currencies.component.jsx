import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import CurrencyCard from './currency.card.component'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Currencies = ({ nums }) => {

    const { data, isFetching } = useGetCryptosQuery(nums)
    if (isFetching) return 'Loading. . .'
    const coins = data.data.coins

    return (
        <Fragment>
            <div className=" ml-4 grid grid-cols-4 space-x-0 justify-center items-center">

                {
                    coins.map((crypto) => (
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
