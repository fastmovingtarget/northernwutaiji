import { useActivity } from "../ActivityContext/ActivityContext"
import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function LevelTracker() {

    const {levelData} = useActivity()

    console.log({levelData})

    const levelDataSet = {
        labels: Object.keys(levelData),
        datasets: [
          {
            label: 'Current Statistics',
            data: Object.values(levelData),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          }
        ]
      };
    
    const graphOptions = {
        scales:{
            r:{//r is radius, the axis on a radar plot
                suggestedMin:0,
                suggestedMax:100,
                ticks:{
                    callback:() => "",//set text blank
                    backdropColor:"rgba(0,0,0,0"//set background opacity to 0
                }
            }
        }
    }


    return (
    <div>
        <Radar data={levelDataSet} options={{scales:{r:{suggestedMin:0, suggestedMax:100, ticks:{callback:() => "", backdropColor:"rgba(0,0,0,0"}}}}}/>
    </div>)
}