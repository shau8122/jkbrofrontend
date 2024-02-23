import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    {
      name: ``,
      revenue: 2000,
    },
    {
      name: `Jan`,
      revenue: 500
    },
    {
      name: `Feb`,
      revenue: 4500
    },
    {
      name: `Mar`,
      revenue: 3000
    },
    {
      name: `Apr`,
      revenue: 13500
    },
    {
      name: `May`,
      revenue: 11000
    },
    {
      name: `May`,
      revenue: 11000
    }
  ];

const RevenueGraph = () => {
  return (
       <div width="100%" height="100%">
          <LineChart width={450} height={300} data={data}>
              <XAxis dataKey="name"/>
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="revenue" stroke={"#4871FF"} name="Rupees"/>
              <Tooltip />
          </LineChart>
      </div>
  )
}

export default RevenueGraph