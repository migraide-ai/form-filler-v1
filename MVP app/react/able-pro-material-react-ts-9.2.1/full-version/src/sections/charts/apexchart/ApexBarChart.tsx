import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart, { Props as ChartProps } from 'react-apexcharts';

// project-imports
import { ThemeMode } from 'config';

// chart options
const barChartOptions = {
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany']
  }
};

// ==============================|| APEXCHART - BAR ||============================== //

export default function ApexBarChart() {
  const theme = useTheme();

  const mode = theme.palette.mode;
  const line = theme.palette.divider;
  const { primary } = theme.palette.text;

  const successDark = theme.palette.success.main;

  const [series] = useState([
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
  ]);

  const [options, setOptions] = useState<ChartProps>(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [successDark],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary]
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [mode, primary, line, successDark]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
}
