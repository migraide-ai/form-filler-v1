import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import InputAdornment from '@mui/material/InputAdornment';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

// project-imports
import AddAddress from './AddAddress';
import AddressCard from './AddressCard';
import CartDiscount from './CartDiscount';
import OrderComplete from './OrderComplete';
import OrderSummary from './OrderSummery';
import PaymentCard from './PaymentCard';
import PaymentOptions from './PaymentOptions';
import PaymentSelect from './PaymentSelect';

import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import { setPaymentCard, setPaymentMethod } from 'api/cart';

import { openSnackbar } from 'api/snackbar';
import { ImagePath, getImageUrl } from 'utils/getImageUrl';

// assets
import { ArrowLeft2, TickCircle, Trash } from 'iconsax-react';

import cvv from 'assets/images/e-commerce/cvv.png';
import lock from 'assets/images/e-commerce/lock.png';
import master from 'assets/images/e-commerce/master-card.png';
import paypalcard from 'assets/images/e-commerce/paypal.png';

// types
import { SnackbarProps } from 'types/snackbar';
import { CartCheckoutStateProps } from 'types/cart';
import { Address, PaymentOptionsProps } from 'types/e-commerce';

interface PaymentProps {
  checkout: CartCheckoutStateProps;
  onBack: () => void;
  onNext: () => void;
  removeProduct: (id: string | number | undefined) => void;
  editAddress: (address: Address) => void;
}

// ==============================|| CHECKOUT - PAYMENT ||============================== //

export default function Payment({ checkout, onBack, onNext, removeProduct, editAddress }: PaymentProps) {
  const [type, setType] = useState('visa');
  const [payment, setPayment] = useState(checkout.payment.method);
  const [rows, setRows] = useState(checkout.products);
  const [cards, setCards] = useState(checkout.payment.card);
  const [select, setSelect] = useState<Address | null>(null);

  const [open, setOpen] = useState(false);

  const handleClickOpen = (billingAddress: Address | null) => {
    setOpen(true);
    billingAddress && setSelect(billingAddress!);
  };

  const handleClose = () => {
    setOpen(false);
    setSelect(null);
  };

  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (checkout.step > 2) {
      setComplete(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setRows(checkout.products);
  }, [checkout.products]);

  const cardHandler = (card: string) => {
    if (payment === 'card') {
      setCards(card);
      setPaymentCard(card);
    }
  };

  const handlePaymentMethod = (value: string) => {
    if (value === 'card') {
      setType('visa');
    } else if (value === 'paypal') {
      setType('mastercard');
    } else {
      setType('cod');
    }
    setPayment(value);
    setPaymentMethod(value);
  };

  const completeHandler = () => {
    if (payment === 'card' && (cards === '' || cards === null)) {
      openSnackbar({
        open: true,
        message: 'Select Payment Card',
        variant: 'alert',
        alert: {
          color: 'error'
        }
      } as SnackbarProps);
    } else {
      onNext();
      setComplete(true);
    }
  };

  const getImage = (type: string) => {
    if (type === 'visa') {
      return <img src={master} alt="card" />;
    }
    if (type === 'mastercard') {
      return <img src={paypalcard} alt="card" />;
    }
    return null;
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={8} xl={9}>
        <Stack spacing={2} alignItems="flex-end">
          <MainCard title="Payment Method">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <AddressCard change address={checkout.billing} handleClickOpen={handleClickOpen} />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <RadioGroup
                    aria-label="delivery-options"
                    value={payment}
                    onChange={(e) => handlePaymentMethod(e.target.value)}
                    name="delivery-options"
                  >
                    <Grid container spacing={2} alignItems="center">
                      {PaymentOptions.map((item: PaymentOptionsProps, index: any) => (
                        <Grid item xs={12} sm={6} lg={4} key={index}>
                          <PaymentSelect item={item} />
                        </Grid>
                      ))}
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>
              {type !== 'cod' && (
                <Grid item xs={12}>
                  <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Stack>
                            <InputLabel>Card Number :</InputLabel>
                            <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                              Enter the 16 digit card number on the card
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                            fullWidth
                            type="password"
                            InputProps={{
                              startAdornment: type !== 'cod' ? <InputAdornment position="start">{getImage(type)}</InputAdornment> : null,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <TickCircle />
                                </InputAdornment>
                              )
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Stack>
                            <InputLabel>Expiry Date :</InputLabel>
                            <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                              Enter the expiration on the card
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={7}>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <Stack direction="row" spacing={2} alignItems="center">
                                <TextField fullWidth placeholder="12" />
                                <Typography color="text.secondary">/</Typography>
                              </Stack>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField fullWidth placeholder="2021" />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Stack>
                            <InputLabel>CVV Number :</InputLabel>
                            <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                              Enter the 3 or 4 digit number on the card
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <img src={cvv} alt="CVV" />
                                </InputAdornment>
                              )
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={5}>
                          <Stack>
                            <InputLabel>Password :</InputLabel>
                            <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                              Enter your dynamic password
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField
                            fullWidth
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <img src={lock} alt="icon" />
                                </InputAdornment>
                              )
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              {type !== 'cod' && (
                <Grid item xs={12}>
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Button variant="outlined" color="secondary">
                      Cancel
                    </Button>
                    <Button variant="contained" color="primary">
                      Save
                    </Button>
                  </Stack>
                </Grid>
              )}
              <Grid item xs={12}>
                <Stack direction="row" spacing={0} alignItems="center">
                  <Grid item xs={6}>
                    <Divider />
                  </Grid>
                  <Typography sx={{ px: 1 }}>OR</Typography>
                  <Grid item xs={6}>
                    <Divider />
                  </Grid>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} lg={10}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} lg={5}>
                    <PaymentCard type="mastercard" paymentType={type} cardHandler={cardHandler} />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={5}>
                    <PaymentCard type="visa" paymentType={type} cardHandler={cardHandler} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </MainCard>
          <Button variant="text" color="secondary" startIcon={<ArrowLeft2 />} onClick={onBack}>
            <Typography variant="h6" color="text.primary">
              Back to Shipping Information
            </Typography>
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} lg={4} xl={3}>
        <Stack>
          <MainCard sx={{ mb: 3 }}>
            <CartDiscount />
          </MainCard>
          <MainCard title="Order Summery" sx={{ borderRadius: '4px 4px 0 0', borderBottom: 'none' }} content={false}>
            {rows.map((row, index) => (
              <List
                key={index}
                component="nav"
                sx={{
                  '& .MuiListItemButton-root': {
                    '& .MuiListItemSecondaryAction-root': {
                      alignSelf: 'flex-start',
                      ml: 1,
                      position: 'relative',
                      right: 'auto',
                      top: 'auto',
                      transform: 'none'
                    },
                    '& .MuiListItemAvatar-root': { mr: '7px' },
                    py: 0.5,
                    pl: '15px',
                    pr: '8px'
                  },
                  p: 0
                }}
              >
                <ListItemButton divider>
                  <ListItemAvatar>
                    <Avatar
                      alt="Avatar"
                      size="lg"
                      variant="rounded"
                      color="secondary"
                      type="combined"
                      src={row.image ? getImageUrl(`thumbs/${row.image}`, ImagePath.ECOMMERCE) : ''}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        component={Link}
                        to={`/apps/e-commerce/product-details/${row.id}`}
                        target="_blank"
                        variant="subtitle1"
                        color="text.primary"
                        sx={{ textDecoration: 'none' }}
                      >
                        {row.name}
                      </Typography>
                    }
                    secondary={
                      <Stack spacing={1}>
                        <Typography color="text.secondary">{row.description}</Typography>
                        <Stack direction="row" alignItems="center" spacing={3}>
                          <Typography>${row.offerPrice}</Typography>
                          <Typography color="text.secondary">{row.quantity} items</Typography>
                        </Stack>
                      </Stack>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      size="medium"
                      color="secondary"
                      sx={{ opacity: 0.5, '&:hover': { bgcolor: 'transparent' } }}
                      onClick={() => removeProduct(row.itemId)}
                    >
                      <Trash style={{ color: 'secondary.main' }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItemButton>
              </List>
            ))}
          </MainCard>
          <OrderSummary checkout={checkout} show={false} />
          <Button variant="contained" sx={{ textTransform: 'none', mt: 3 }} onClick={completeHandler} fullWidth>
            Process to Checkout
          </Button>
          <OrderComplete open={complete} />
        </Stack>
      </Grid>
      <AddAddress open={open} handleClose={handleClose} address={select!} editAddress={editAddress} />
    </Grid>
  );
}
