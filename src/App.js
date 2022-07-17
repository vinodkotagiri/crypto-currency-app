import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SideBar, DashBoard, Currencies, MoneyControl, News } from './components'
const App = () => {
    return (
        <Fragment>
            <div className="App flex flex-row">
                <SideBar />
                <Routes>
                    <Route index element={<DashBoard />}></Route >
                    <Route path="/currencies" element={<Currencies nums={100} />} />
                    <Route path="/money-control" element={<MoneyControl />} />
                    <Route path="/news" element={<News />} />
                    <Route path="*" element={<DashBoard />} />
                </Routes>
            </div>
            <div className="footer flex justify-center items-center h-20 text-white bg-slate-700 w-screen">
                <div className="text-sm font-light">&copy;CryptoWorld</div>
            </div>
        </Fragment >
    )
}

export default App
