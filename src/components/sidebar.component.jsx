import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './../crypto-logo.svg'
import { FcCurrencyExchange, FcMoneyTransfer, FcNews } from 'react-icons/fc'
const SideBar = () => {
    return (
        <div className="flex flex-col w-1/4  " >
            <aside className="w-45 fixed left-0 top-0 h-screen bg-slate-700 p-10">
                <Link to="/">
                    <div className="flex flex-row brand  items-center justify-start hover:cursor-pointer">
                        <Logo />
                        <p className="px-3 font-bold text-xl font-mono text-blue-200 ">CryptoWorld</p>
                    </div>
                </Link>
                <hr className="mt-6" />

                <div className="flex flex-col items-start justify-end">
                    <Link to="/currencies">
                        <div className="flex flex-row items-center justify-start pt-6 mt-6  m-4 hover:cursor-pointer">
                            <FcCurrencyExchange size={24} />
                            <p className="ml-3 text-blue-300 font-light text-lg ">Currencies</p>
                        </div>
                    </Link>
                    <Link to="/money-control">
                        <div className="flex flex-row items-center justify-start py-2 m-4 hover:cursor-pointer">
                            <FcMoneyTransfer size={24} />
                            <p className="ml-3 text-blue-300 font-light text-lg">Money Control</p>
                        </div>
                    </Link>
                    <Link to="/news">
                        <div className="flex flex-row items-center justify-start py-2 m-4 hover:cursor-pointer">
                            <FcNews size={24} />
                            <p className="ml-3 text-blue-300 font-light text-lg">News</p>
                        </div>
                    </Link>

                </div>
            </aside >
        </div >
    )
}

export default SideBar
