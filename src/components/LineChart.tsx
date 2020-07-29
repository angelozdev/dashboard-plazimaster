import React, { FC } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

const data = [
   {
     name: 'Page A', uv: 1, pv: 13, amt: 1231,
   },
   {
     name: 'Page B', uv: 1, pv: 8, amt: 2210,
   },
   {
     name: 'Page C', uv: 2, pv: 5, amt: 2290,
   },
   {
     name: 'Page D', uv: 3, pv: 3, amt: 2000,
   },
   {
     name: 'Page E', uv: 5, pv: 8, amt: 2181,
   },
   {
     name: 'Page F', uv: 8, pv: 13, amt: 2500,
   },
   {
     name: 'Page G', uv: 13, pv: 1, amt: 2100,
   }
 ];


const LineCharts: FC = () => {
   return (
    <ResponsiveContainer width='100%' aspect={5/2}>
      <LineChart data={data}>
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Line type="monotone" dataKey="pv" stroke="#801336" activeDot={{ r: 5 }} />
         <Line type="monotone" dataKey="uv" stroke="#ee4540" />
      </LineChart>
    </ResponsiveContainer>
   )
}

export default LineCharts;
