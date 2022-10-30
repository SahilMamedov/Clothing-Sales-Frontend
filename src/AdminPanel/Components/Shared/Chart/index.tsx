
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { StyledBox } from './styles';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Jacket', 'Pants', 'Jeans', 'Coats', 'Shirt', 'Skirts','Sweater','T-Shirt'],
  datasets: [
    {
      label: '# of Votes',
      data: [80, 79, 57, 78, 66, 76,70,50],
      backgroundColor: [
        'rgba(10, 72, 241, 0.788)',
        'rgba(235, 2, 2, 0.712)',
        'rgba(27, 230, 0, 0.5)',
        'rgba(212, 226, 13, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(13, 231, 231, 0.5)',
        'rgba(6, 112, 89, 0.973)',
      ],
      borderWidth: 1,
    },
  ],
};
export const Chart = ()=> {
  return(
    <StyledBox>
    <PolarArea data={data} />;
    </StyledBox>
  ) 
}