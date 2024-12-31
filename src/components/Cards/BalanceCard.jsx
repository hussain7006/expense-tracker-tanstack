import React from 'react'
import CountUp from 'react-countup';

export default function BalanceCard() {
    return (
        <div className="stats drop-shadow shadow-inner hover:shadow-xl h-full w-full mx-2 bg-green-50 dark:bg-[#27253a00] ">
            <div className="stat dark:bg-[#272d3b] transition">
                <div className="stat-figure text-primary ">
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-8 w-8 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> */}
                    <img src="/images/salary.png" alt="cost" className='w-11 h-11 object-cover duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-0 hover:scale-125 hover:z-10 hover:cursor-pointer' />
                </div>
                <div className="stat-title font-extrabold text-slate-800 dark:text-white">INCOME</div>
                <div className="stat-value text-purple-950 dark:text-gray-300 text-[24px]">
                    <CountUp
                        start={0}
                        end={25000}
                        duration={2}
                        separator=","
                        decimals={2}
                        decimal="."
                        prefix="Rs "
                    // suffix=" left"
                    // onEnd={() => console.log('Ended! 👏')}
                    // onStart={() => console.log('Started! 💨')}
                    >
                    </CountUp>
                </div>
                <div className="stat-desc text-green-600 font-bold">Your income, your success</div>
            </div>
            <div className="stat dark:bg-[#272d3b]">
                <div className="stat-figure text-primary ">
                    <img src="/images/cost.png" alt="cost" className='w-12 h-12 object-cover  duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-0 hover:scale-125 hover:z-10 hover:cursor-pointer' />
                </div>
                <div className="stat-title font-extrabold text-red-700 dark:text-white">EXPENSE</div>
                <div className="stat-value text-error text-[24px]">
                    <CountUp
                        start={0}
                        end={25000}
                        duration={1.5}
                        separator=","
                        decimals={2}
                        decimal="."
                        prefix="Rs "
                    >
                    </CountUp>
                </div>
                <div className="stat-desc text-green-600 font-bold">Manage where your money goes</div>
            </div>
            <div className="stat dark:bg-[#272d3b]">
                <div className="stat-figure text-primary">
                    <img src="/images/apple.png" alt="cost" className='w-12 h-12 object-cover  duration-500 ease-in-out transform hover:-translate-y-1 hover:translate-x-0 hover:scale-125 hover:z-10 hover:cursor-pointer' />
                </div>
                <div className="stat-title font-extrabold text-blue-700 dark:text-white">BALANCE</div>
                <div className="stat-value text-success text-[24px]">
                    <CountUp
                        start={0}
                        end={25000}
                        duration={1.5}
                        separator=","
                        decimals={2}
                        decimal="."
                        prefix="Rs "
                    >
                    </CountUp>
                </div>
                <div className="stat-desc text-green-600 font-bold">Manage where your money goes</div>
            </div>
        </div>
    )
}
