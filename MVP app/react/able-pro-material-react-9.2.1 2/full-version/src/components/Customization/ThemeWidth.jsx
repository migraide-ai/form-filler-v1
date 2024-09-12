// material-ui
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';

// assets
import defaultLayout from 'assets/images/customization/fluid.svg';
import containerLayout from 'assets/images/customization/container.svg';

// ==============================|| CUSTOMIZATION - CONTAINER ||============================== //

export default function ThemeWidth() {
  const theme = useTheme();

  const { container, onChangeContainer } = useConfig();

  const handleContainerChange = () => {
    onChangeContainer();
  };

  return (
    <RadioGroup
      row
      aria-label="payment-card"
      name="payment-card"
      value={container ? 'container' : 'fluid'}
      onChange={handleContainerChange}
    >
      <Stack direction="row" alignItems="center" spacing={2.5} sx={{ width: '100%' }}>
        <FormControlLabel
          control={<Radio value="fluid" sx={{ display: 'none' }} />}
          sx={{ width: '100%', m: 0, display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
          label={
            <Stack alignItems="center" spacing={0.5}>
              <MainCard content={false} sx={{ borderWidth: 2, p: 1, ...(!container && { borderColor: theme.palette.primary.main }) }}>
                <CardMedia component="img" src={defaultLayout} alt="defaultLayout" />
              </MainCard>
              <Typography variant="caption">Fluid</Typography>
            </Stack>
          }
        />
        <FormControlLabel
          control={<Radio value="container" sx={{ display: 'none' }} />}
          sx={{ width: '100%', m: 0, display: 'flex', '& .MuiFormControlLabel-label': { flex: 1 } }}
          label={
            <Stack alignItems="center" spacing={0.5}>
              <MainCard content={false} sx={{ borderWidth: 2, p: 1, ...(container && { borderColor: theme.palette.primary.main }) }}>
                <CardMedia component="img" src={containerLayout} alt="defaultLayout" />
              </MainCard>
              <Typography variant="caption">Container</Typography>
            </Stack>
          }
        />
      </Stack>
    </RadioGroup>
  );
}
