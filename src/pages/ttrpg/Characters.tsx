import Dashboard from '../../layouts/dashboard';
import Card from '../../components/core/Card';


export default function Characters() {

    return <Dashboard >
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-full p-4">
                <h1 className="text-3xl font-bold ">
                   Player Characters
                </h1>
                <div className="flex flex-col items-center justify-center w-full h-full ">
                    <section className="w-full p-4 space-y-4 ">
                        <div className="flex flex-col flex-wrap w-full space-x-4 space-y-4 text-slate-500 dark:text-slate-300 rtl:space-x-reverse ">
                            {/* TODO: pull character list from api */}
                            <Card className='flex-1 first:mt-4 first:ml-4'>
                                Test 1
                            </Card>
                            <Card className='flex-1'>
                                Test 2
                            </Card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </Dashboard>
}