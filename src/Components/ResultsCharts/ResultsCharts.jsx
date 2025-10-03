import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData =[
  { "id": 1, "name": "Alice", "physics": 78, "chemistry": 82, "math": 91 },
  { "id": 2, "name": "Bob", "physics": 65, "chemistry": 72, "math": 68 },
  { "id": 3, "name": "Charlie", "physics": 89, "chemistry": 90, "math": 95 },
  { "id": 4, "name": "David", "physics": 55, "chemistry": 60, "math": 58 },
  { "id": 5, "name": "Eva", "physics": 92, "chemistry": 85, "math": 88 },
  { "id": 6, "name": "Frank", "physics": 74, "chemistry": 70, "math": 80 },
  { "id": 7, "name": "Grace", "physics": 81, "chemistry": 79, "math": 84 },
  { "id": 8, "name": "Hannah", "physics": 67, "chemistry": 73, "math": 71 },
  { "id": 9, "name": "Ian", "physics": 90, "chemistry": 95, "math": 93 },
  { "id": 10, "name": "Julia", "physics": 59, "chemistry": 62, "math": 64 }
]


const ResultsCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsCharts;