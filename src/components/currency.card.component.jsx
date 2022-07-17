import React from 'react'
import millify from 'millify'
const CurrencyCard = ({ data: { uuid, rank, name, price, marketCap, change, iconUrl } }) => {
    return (
        <div className="card flex flex-col m-3 border-solid border-2 p-3 h-50 border-purple-200 bg-purple-200 rounded-xl" key={uuid}>
            <div className="flex flex-row justify-between mb-3">
                <p className="text-lg font-bold text-gray-700 mr-4">{`${rank}. ${name}`}</p>
                <img src={iconUrl} className="w-8" alt="..." />
            </div>
            <div className="flex flex-col">
                <div className="text-lg font-normal text-gray-600">Price: {millify(price)}</div>
                <div className="text-lg font-normal text-gray-600">Market Cap: {millify(marketCap)}</div>
                <div className="text-lg font-normal text-gray-600">Daily Change: {change}%</div>
            </div>
        </div >
    )
}
export default CurrencyCard
