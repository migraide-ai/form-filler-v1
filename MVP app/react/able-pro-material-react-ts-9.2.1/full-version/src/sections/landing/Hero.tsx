import { MouseEvent, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';

// assets
import AnimateButton from 'components/@extended/AnimateButton';
import techBootstrap from 'assets/images/landing/tech-bootstrap.svg';
import techReact from 'assets/images/landing/tech-react.svg';
import techAngular from 'assets/images/landing/tech-angular.svg';
import techCodeigniter from 'assets/images/landing/tech-codeigniter.svg';
import techNet from 'assets/images/landing/tech-net.svg';
import techFigma from 'assets/images/landing/tech-figma.svg';
import techVue from 'assets/images/landing/tech-vuetify.svg';
import techVuelaravel from 'assets/images/landing/tech-l+v.svg';
import techNextJS from 'assets/images/landing/tech-nextjs.svg';
import techLaravelBootstrap from 'assets/images/landing/tech-Laravel+Bootstrap.svg';
import techDjango from 'assets/images/landing/tech-Django.svg';
import techFlask from 'assets/images/landing/tech-Flask.svg';
import techNodeJs from 'assets/images/landing/tech-Node-js.svg';
import techSvelteKit from 'assets/images/landing/tech-SvelteKit.svg';

// ==============================|| LANDING - HERO PAGE ||============================== //

export default function HeroPage() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  let value: string = window.location.search;
  const params = new URLSearchParams(value);
  const ispValue = params.get('isp');
  const ispValueAvailable = ispValue !== null && parseInt(ispValue) === 1;

  const items = [
    {
      label: 'Bootstrap',
      image: techBootstrap,
      url: 'https://ableproadmin.com/dashboard/index.html',
      target: '_blank',
      tooltipTitle: 'Bootstrap'
    },
    {
      label: 'React MUI',
      image: techReact,
      url: '/login',
      target: '_blank',
      tooltipTitle: 'React MUI'
    },
    {
      label: 'Angular',
      image: techAngular,
      url: 'https://ableproadmin.com/angular/default/dashboard/default',
      target: '_blank',
      tooltipTitle: 'Angular'
    },
    {
      label: 'CodeIgniter',
      image: techCodeigniter,
      url: 'https://ableproadmin.com/codeigniter/default/public/dashboard-default',
      target: '_blank',
      tooltipTitle: 'CodeIgniter'
    },
    {
      label: 'ASP.net',
      image: techNet,
      url: 'https://able-pro.azurewebsites.net/Dashboard/Index',
      target: '_blank',
      tooltipTitle: 'ASP.net'
    },
    {
      label: 'Next js',
      image: techNextJS,
      url: 'https://able-pro.azurewebsites.net/Dashboard/Index',
      target: '_blank',
      tooltipTitle: 'Next js'
    },
    {
      label: 'Vue',
      image: techVue,
      url: 'https://ableproadmin.com/vue/dashboard/default',
      target: '_blank',
      tooltipTitle: 'Vue'
    },
    {
      label: 'Vuetify Laravel',
      image: techVuelaravel,
      url: 'https://phplaravel-207002-4524103.cloudwaysapps.com/build/dashboards/default',
      target: '_blank',
      tooltipTitle: 'Vuetify Laravel'
    },
    {
      label: 'Laravel Bootstrap',
      image: techLaravelBootstrap,
      url: '#!',
      target: '_self',
      tooltipTitle: 'Live Preview Not Available'
    },
    {
      label: 'Django',
      image: techDjango,
      url: '#!',
      target: '_self',
      tooltipTitle: 'Live Preview Not Available'
    },
    {
      label: 'Node JS',
      image: techNodeJs,
      url: '#!',
      target: '_self',
      tooltipTitle: 'Live Preview Not Available'
    },
    {
      label: 'Flask',
      image: techFlask,
      url: '#!',
      target: '_self',
      tooltipTitle: 'Live Preview Not Available'
    },
    {
      label: 'SvelteKit',
      image: techSvelteKit,
      url: '#!',
      target: '_self',
      tooltipTitle: 'Live Preview Not Available'
    },
    {
      label: 'Figma',
      image: techFigma,
      url: 'https://www.figma.com/file/6XqmRhRmkr33w0EFD49acY/Able-Pro--v9.0-Figma-Preview?type=design&mode=design&t=4FS2Lw6WxsmJ3RLm-0',
      target: '_blank',
      tooltipTitle: 'Figma'
    }
  ];

  const listItems = items.map((item, index) => {
    // Construct the final URL
    const finalUrl = item.url !== '#!' && ispValueAvailable ? `${item.url}?isp=1` : item.url;
    return (
      <ListItemButton
        key={index}
        component={item.label === 'React MUI' ? RouterLink : 'a'}
        {...(item.label === 'React MUI' ? { to: finalUrl } : { href: finalUrl })}
        target={item.target}
      >
        <Tooltip title={item.tooltipTitle} placement="bottom">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ListItemAvatar
              sx={{ minWidth: 'auto', marginRight: 1, filter: item.tooltipTitle === 'Live Preview Not Available' ? 'grayscale(1)' : '' }}
            >
              <CardMedia component="img" image={item.image} sx={{ width: '30px' }} />
            </ListItemAvatar>
            <ListItemText primary={item.label} />
          </div>
        </Tooltip>
      </ListItemButton>
    );
  });

  const techBottom = items.map((item, index) => {
    const finalUrl = item.url !== '#!' && ispValue !== null && parseInt(ispValue) === 1 ? `${item.url}?isp=1` : item.url;
    return (
      <Grid item key={index}>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.8 }}
        >
          <Tooltip title={'click to Preview ' + item.tooltipTitle}>
            <Link
              component={item.label === 'React MUI' ? RouterLink : Link}
              {...(item.label === 'React MUI' ? { to: finalUrl } : { href: finalUrl })}
              target={item.target}
            >
              <CardMedia component="img" image={item.image} sx={{ width: 'auto' }} />
            </Link>
          </Tooltip>
        </motion.div>
      </Grid>
    );
  });

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', pb: 12.5, pt: 10, display: 'flex', alignItems: 'center' }}>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ pt: { md: 0, xs: 10 }, pb: { md: 0, xs: 22 } }}>
          <Grid item xs={12} md={9}>
            <Grid container spacing={3} sx={{ textAlign: 'center' }}>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '1.825rem', sm: '2rem', md: '3.4375rem' },
                      fontWeight: 700,
                      lineHeight: 1.2
                    }}
                  >
                    Explore One of the{' '}
                    <Typography
                      variant="h1"
                      component="span"
                      sx={{
                        fontSize: 'inherit',
                        background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169), rgb(37, 161, 244)) 0 0 / 400% 100%',
                        color: 'transparent',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        animation: 'move-bg 24s infinite linear',
                        '@keyframes move-bg': { '100%': { backgroundPosition: '400% 0' } }
                      }}
                    >
                      Featured Dashboard
                    </Typography>{' '}
                    Template in Themeforest
                  </Typography>
                </motion.div>
              </Grid>
              <Grid container justifyContent="center" item xs={12}>
                <Grid item xs={8}>
                  <motion.div
                    initial={{ opacity: 0, translateY: 550 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 30,
                      delay: 0.2
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        fontWeight: 400,
                        lineHeight: { xs: 1.4, md: 1.4 }
                      }}
                    >
                      Able Pro is the one of the Featured admin dashboard template in Envato Marketplace and used by over 2.5K+ Customers
                      wordwide.
                    </Typography>
                  </motion.div>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.4
                  }}
                >
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <AnimateButton>
                        <Button component={RouterLink} to="/components-overview/buttons" size="large" color="secondary" variant="outlined">
                          Explore Components
                        </Button>
                      </AnimateButton>
                    </Grid>
                    <Grid item>
                      <AnimateButton>
                        <Button
                          aria-controls={open ? 'wallet-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                          size="large"
                          color="primary"
                          variant="contained"
                        >
                          Live Preview
                        </Button>
                      </AnimateButton>
                      <Menu
                        id="wallet-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'wallet-button',
                          sx: { p: 1.25, minWidth: 150 }
                        }}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right'
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right'
                        }}
                      >
                        {listItems}
                      </Menu>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 30,
                    delay: 0.6
                  }}
                >
                  <Grid container spacing={3} justifyContent="center">
                    <Grid
                      item
                      sx={{
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          height: 30,
                          bottom: 10,
                          left: 'auto',
                          right: '-12px',
                          width: '1px',
                          background: theme.palette.divider
                        }
                      }}
                    >
                      <Rating name="read-only" value={4.5} size="small" readOnly />
                      <Typography variant="h4">
                        4.7/5
                        <span
                          style={{
                            fontSize: '75%',
                            fontWeight: 400,
                            margin: 5,
                            color: theme.palette.text.secondary
                          }}
                        >
                          Ratings
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">
                        <span
                          style={{
                            fontSize: '75%',
                            fontWeight: 400,
                            color: theme.palette.text.secondary
                          }}
                        >
                          Sales
                        </span>
                      </Typography>
                      <Typography variant="h4">2.5K+</Typography>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.paper',
            borderTop: `1px solid ${theme.palette.divider}`,
            borderBottom: `1px solid ${theme.palette.divider}`
          }}
        >
          <Grid
            container
            spacing={0}
            justifyContent={{ xs: 'start', lg: 'center' }}
            wrap="nowrap"
            sx={{
              overflowX: 'auto',
              '& > .MuiGrid-item': {
                borderRight: `1px solid ${theme.palette.divider}`,
                '&:first-of-type': { borderLeft: `1px solid ${theme.palette.divider}` },
                '& img': { padding: 1.3 }
              }
            }}
          >
            {techBottom}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
