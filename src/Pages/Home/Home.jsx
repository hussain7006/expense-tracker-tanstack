import BalanceCard from '../../components/Cards/BalanceCard'
import CreateExpense from '../../components/Cards/CreateExpense'
import ReBarChart from '../../components/Charts/ReBarChart'
import RePieChart from '../../components/Charts/RePieChart'
import ExpenseHistoryTable from '../../components/Tables/ExpenseHistoryTable'

export default function Home() {
    return (
        <div className='gap-10 flex h-[calc(100vh-120px)] box-border bg-green-50 dark:bg-[#27253a00]'>
            <div className='flex flex-col border-red flex-1 gap-2'>
                <div className='top flex h-[33.33%] p-2 gap-0'>
                    {/* EXPENSE HISTORY */}
                    <div className="h-full w-2/3 flex justify-center items-center ">
                        <BalanceCard />
                    </div>

                    <div className="overflow-x-auto h-full rounded-lg px-4 py-1 shadow-lg hover:shadow-xl bg-[#F0FDF4] dark:bg-[#272D3B] w-1/3 flex flex-col gap-2">

                        <ExpenseHistoryTable />
                    </div>

                </div>
                <div className='mid h-[calc(100vh-120px-33.33%)] w-[100vw] flex gap-5 p-3'>

                    <div className="midLeft w-1/3 border-2 hover:border-gray-500 border-gray-600 bg-[#4F81AA] dark:bg-teal-800 rounded-xl flex flex-col gap-3 p-2">
                        <CreateExpense />
                    </div>
                    <div className='midRight w-full flex items-center justify-center border-2 hover:border-gray-500 border-gray-600 rounded-xl p-2'>
                        <ReBarChart />
                        <RePieChart />

                    </div>
                </div>
            </div>
        </div>
    )
}
