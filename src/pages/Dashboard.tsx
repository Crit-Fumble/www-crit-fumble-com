import Dashboard from '../layouts/dashboard';
import Card from '../components/core/Card';
import 'chart.js/auto';
import { Doughnut, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import faker from 'faker';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Crit Fumble Gaming',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#59ddaa',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#fe3a82',
    },
  ],
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function About() {

//   const doughnutOptions = {
//     data: {
//       datasets: [
//         {
//           data: [11, 39, 50],
//           /**
//            * These colors come from Tailwind CSS palette
//            * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
//            */
//           backgroundColor: ['#59ddaa', '#9c64f2', '#fe3a82'],
//           label: 'Dataset 1',
//         },
//       ],
//       labels: ['Shoes', 'Shirts', 'Bags'],
//     },
//     options: {
//       responsive: true,
//       cutoutPercentage: 80,
//     },
//     legend: {
//       display: false,
//     },
//   }

  return (
    <Dashboard >
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <section className="w-full p-4 space-y-4 ">
          <div className="flex flex-col flex-wrap w-full space-x-4 space-y-4 text-slate-500 dark:text-slate-300 rtl:space-x-reverse ">
            {/* TODO: pull in Discord Messages or an RSS feed */}
            <Card className='flex-1 first:mt-4 first:ml-4'>
              Feed 1
            </Card>
            <Card className='flex-1'>
              Feed 2
            </Card>
          </div>
        </section>
      </div>
    </Dashboard>
  );
}

