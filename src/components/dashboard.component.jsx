import React from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Currencies from './currencies.component'
import millify from 'millify'
const DashBoard = () => {
    const { data, isFetching } = useGetCryptosQuery(10)
    if (isFetching) return 'Loading...'
    const globalStats = data?.data?.stats

    console.log(globalStats)

    return (
        <div className="flex flex-col w-4/5 bg-slate-700">
            <div className="capitalize flex justify-start items-center p-6 text-3xl font-bold text-white ">global crypto stats</div>

            <div className="grid grid-cols-2 mt-3">
                <div className="flex flex-col">
                    <div className="text-xl font-semibold text-gray-400 mb-2 capitalize px-3 mt-1">total crypto currencies</div>
                    <div className="text-2xl font-bold text-white mb-2 px-3">{globalStats.total.toLocaleString()}</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-xl font-semibold text-gray-400 mb-2 capitalize px-3 mt-1">total exchange</div>
                    <div className="text-2xl font-bold text-white mb-2 px-3" >{millify(globalStats.totalExchanges)}</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-xl font-semibold text-gray-400 mb-2 capitalize  px-3 mt-1">total market cap</div>
                    <div className="text-2xl font-bold text-white mb-2 px-3">{millify(globalStats.totalMarketCap)}</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-xl font-semibold text-gray-400 mb-2 capitalize px-3 mt-1">total 24h volume</div>
                    <div className="text-2xl font-bold text-white mb-2 px-3">{millify(globalStats.total24hVolume)}</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-xl font-semibold text-gray-400 mb-2 capitalize px-3 mt-1">total markets</div>
                    <div className="text-2xl font-bold text-white mb-2 px-3">{millify(globalStats.totalMarkets)}</div>
                </div>
            </div>

            <div>
                <div className="capitalize flex justify-start items-center p-6 text-3xl font-bold text-white">top 10 crypto currencies in the world</div>

                <Currencies nums={10} />
                <div className="capitalize flex justify-end items-center p-6 text-2xl font-bold text-yellow-600"><Link to="/currencies">show more</Link></div>

            </div>
        </div>
    )
}

export default DashBoard
