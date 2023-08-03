import { Divider } from '@mui/material'
import React from 'react'

const paymentdata=[
    {id:1,country:"india",amount:20003,status:"paid from",paymenttile:"11:30 PM, 12 May 2023"},
    {id:1,country:"india",amount:20003,status:"paid from",paymenttile:"11:30 PM, 12 May 2023"},
    {id:1,country:"india",amount:20003,status:"paid from",paymenttile:"11:30 PM, 12 May 2023"},
    {id:1,country:"india",amount:20003,status:"paid from",paymenttile:"11:30 PM, 12 May 2023"},
    {id:1,country:"india",amount:20003,status:"paid from",paymenttile:"11:30 PM, 12 May 2023"},
]
export default function PaymentDetails() {
  return (
    <div className='p-4'>
        <p className='text-[20px] mb-8 font-semibold'>Payment History</p>
        <div className="content">
            <ol>
                {paymentdata.map((item,id)=>(
                    <>
                    <div key={id} className='flex justify-between'>
                    <div className='py-2'>
                    <p >{item.country}</p>
                    <p>{item.amount}</p>
                    </div>
                    <div className='py-2'>
                        <p>{item.paymenttile}</p>
                        <p>{item.status}</p>
                    </div>
                    </div>
                    <Divider/>
                    </>
                ))}
            </ol>
        </div>

    </div>
  )
}
