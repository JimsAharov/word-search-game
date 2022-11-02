import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ChartOptions,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-3";

console.log(ChartJS);
// ChartJS.register(
//   CategoryScale,
//   // LinearScale,
//   TimeScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

export const Chart = () => {
  const options:ChartOptions = {
     scales:{
         x: {
          type: 'time',
          time:{
            unit: "day"
          }
         }
     },
      // x: {
      //   type: "time",
      //   time: {
      //     unit: "day"
      //   }
      // }
      
   
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
    },
  };

  const values = [
    {
      x: new Date("2020-01-01"),
      y: 100.2
    },
    {
      x: new Date("2020-01-02"),
      y: 102.2
    },
    {
      x: new Date("2020-01-03"),
      y: 105.3
    },
    {
      x: new Date("2020-01-11"),
      y: 104.4
    }
  ];

  // const values = [
  //   {
  //     x: 10,
  //     y: 100.2
  //   },
  //   {
  //     x: 10,
  //     y: 102.2
  //   },
  
  // ];
  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];

  const data = {
    
    datasets: [
      {
        label: "DAILY",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 16 })),
        data: values,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "LIFETIME",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  return <Line options={options} data={data} />;
};

// import { Chart } from "../../Chart/Chart";

// export function Chart(){

//     return <div>
//              <ChartistGraph data={{
//                 labels: [1, 2, 3, 4, 5, 6, 7, 8],
//                 series: [[5, 9, 7, 8, 5, 3, 5, 4]]
//             }} options={{
//                 low: 0,
//                 showArea: true
//             }} type={'Line'} />
//            </div>
// }
