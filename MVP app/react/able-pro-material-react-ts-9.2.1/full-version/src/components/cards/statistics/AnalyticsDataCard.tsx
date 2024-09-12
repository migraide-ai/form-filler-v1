// material-ui
import Box from '@mui/material/Box';
import Chip, { ChipProps } from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { TrendDown, TrendUp } from 'iconsax-react';

interface Props {
  title: string;
  count: string;
  percentage?: number;
  isLoss?: boolean;
  color?: ChipProps['color'];
  children: any;
}

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

export default function AnalyticsDataCard({ color = 'primary', title, count, percentage, isLoss, children }: Props) {
  return (
    <MainCard content={false}>
      <Box sx={{ p: 2.25 }}>
        <Stack spacing={0.5}>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
            {percentage && (
              <Chip
                variant="combined"
                color={color}
                icon={
                  <>
                    {!isLoss && <TrendUp variant="Bold" />}
                    {isLoss && <TrendDown variant="Bold" />}
                  </>
                }
                label={`${percentage}%`}
                sx={{ ml: 1.25, pl: 0.5, borderRadius: 1 }}
                size="small"
              />
            )}
          </Stack>
        </Stack>
      </Box>
      {children}
    </MainCard>
  );
}
