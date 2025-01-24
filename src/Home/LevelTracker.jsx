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

    const levelDataSet = {
        labels: Object.keys(levelData).slice(0, 5),
        datasets: [
          {
            label: 'Current Statistics',
            data: Object.values(levelData).slice(0, 5),
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
        },
        plugins:{
          legend:{
            display:false,
            position:"bottom"
        }
      }
    }

    return (
      <div className="level-tracker-container column center">
          <div className="chartjs-container">
            <Radar data={levelDataSet} options={graphOptions}/>
          </div>
      </div>
    )
}