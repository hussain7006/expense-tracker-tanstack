import React from 'react'

export default function CreateExpense() {
    return (
        <>
            {/* <div className='px-4 py-1 font-semibold w-max rounded-lg bg-[#272D3B] text-white'>CREATE EXPENSE</div>
            <div className=' flex flex-col w-full py-2'>
                <label htmlFor="" className='text-white'>Expense Title</label>
                <input type="text" placeholder="e.g. Milk Botel" className="input input-bordered w-full max-w-xs bg-slate-200 dark:bg-[#1D232A]" />
            </div>
            <div className='flex flex-col w-full py-2'>
                <label htmlFor="" className='text-white'>Amount</label>
                <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-200 dark:bg-[#1D232A]" />
            </div>
            <div className='flex flex-col w-full py-2'>
                <button className="inline-block cursor-pointer rounded-md bg-[#1f455f] dark:bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
                    Add Expense
                </button>
            </div> */}

            <div role="tablist" className="tabs tabs-lifted h-full">
                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="ADD EXPENSE"
                    defaultChecked
                />

                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-full">
                    {/* <div className='px-4 py-1 font-semibold w-max rounded-lg bg-[#272D3B] text-white'>CREATE EXPENSE</div> */}
                    <div className=' flex flex-col w-full py-2'>
                        <label htmlFor="" className='text-white'>EXPENSE TITLE</label>
                        <input type="text" placeholder="e.g. Milk Botel" className="input input-bordered w-full max-w-xs bg-slate-200 dark:bg-[#1D232A]" />
                    </div>
                    <div className='flex flex-col w-full py-2'>
                        <label htmlFor="" className='text-white'>AMOUNT</label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-200 dark:bg-[#1D232A]" />
                    </div>
                    <div className='flex flex-col w-full py-2'>
                        <button className="inline-block cursor-pointer rounded-md bg-[#1f455f] dark:bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
                            Add Expense
                        </button>
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="ADD INCOME"

                />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-full">
                    {/* <div className='px-4 py-1 font-semibold w-max rounded-lg bg-[#272D3B] text-white'>CREATE INCOME</div> */}
                    <div className=' flex flex-col w-full py-2'>
                        <label htmlFor="" className='text-white'>INCOME TITLE</label>
                        <input type="text" placeholder="e.g. Salary" className="input input-bordered w-full max-w-xs bg-slate-200 dark:bg-[#1D232A] text-black" />
                    </div>
                    <div className='flex flex-col w-full py-2'>
                        <label htmlFor="" className='text-white'>AMOUNT</label>
                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-slate-200 dark:bg-[#1D232A] text-black" />
                    </div>
                    <div className='flex flex-col w-full py-2'>
                        <button className="inline-block cursor-pointer rounded-md bg-[#1f455f] dark:bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
                            Add Expense
                        </button>
                    </div>
                </div>

                {/* <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    Tab content 3
                </div> */}
            </div>
        </>
    )
}
