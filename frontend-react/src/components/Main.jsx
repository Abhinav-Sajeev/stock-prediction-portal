import React from 'react'
import Button from './Button'
import Header from './Header';
import Footer from "./Footer";

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>This is a stock prediction application that utilizes advanced machine learning techniques to analyze historical market data, identify trends, and forecast potential future stock prices. The system leverages algorithms such as regression models, time series analysis, and deep learning to provide data-driven insights that can assist investors and traders in making informed financial decisions.</p>
                <Button text='Login' className='btn btn-outline-info' url='/login'/>
            </div>
        </div>
    </>
  )
}

export default Main