import { useSelector } from "react-redux"
import TrackingList from "./Dashboard/TrackingList"
import RevenueGraph from "./RevenueGraph"
import ServicesPieChart from "./ServicesPieChart"

const overviewData = [
  {
    title: '1200+',
    subtitle: 'On Delivery',
    imgSrc: ''
  },
  {
    title: '100+',
    subtitle: 'On Hold',
    imgSrc: ''
  },
  {
    title: '13.00+',
    subtitle: 'Completed',
    imgSrc: ''
  },
  {
    title: '26+',
    subtitle: 'Returned',
    imgSrc: ''
  }
]


const Dashboard = () => {
  const user = useSelector(state=>state.userState.user)
  return (
    <div className="w-[100%] ">
        <h1 className="pl-10 mb-5 font-playfair text-textPrimary text-xl">
          Hi!
          <br/>
          {user.name ||""}, 
        </h1>
        <div className="w-[100%] flex justify-evenly sm:flex-row flex-col gap-y-4 ">

            <div className="sm:w-[60%] w-[80%]">
              
              <section className="flex bg-secondary border-2 rounded-3xl sm:flex-row flex-col flex-wrap">

                <div className="grid grid-cols-12 sm:w-[30%] w-[100%]">
                  {overviewData.map((data, index) => (   
                    <div key={index} className="col-span-6 flex-wrap flex justify-center items-center flex-col">
                      <div className="w-[3rem] h-[3rem] rounded-full bg-gray-500"></div>
                      <h1 className="text-sm">{data.title}</h1>
                      <p className="text-sm text-gray-500">{data.subtitle}</p>
                    </div>
                  ))}
                
                </div>

                
                <div className="bg-white w-[30rem] overflow-x-scoll">
                  <RevenueGraph />         
                </div>

              </section>
            </div>

            <div className="sm:w-[30%] w-[100%]">

                <section className="border-2 rounded-2xl p-1 flex  items-center flex-col">
                    <div className="flex justify-evenly pt-10 w-[100%]">
                      <h1  className="text-sm font-bold">Popular Services</h1>
                      <p className="text-sm" >Monday, February 22</p>
                    </div>
                    <ServicesPieChart PieChart />
                </section> 

            </div>


        </div>

      <div className="mt-[2rem]">
        <TrackingList />
      </div>
    </div>
  )
}

export default Dashboard