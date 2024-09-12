import { cloneElement, useState, ReactElement } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FormControlLabel from '@mui/material/FormControlLabel';

// project-imports
import AntAvatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import MainCard from 'components/MainCard';

// assets
import { FolderOpen, Trash } from 'iconsax-react';
import vector1 from 'assets/images/users/vector-1.png';
import avatar4 from 'assets/images/users/avatar-4.png';

function generate(element: ReactElement) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value
    })
  );
}

const ListWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}));
ListWrapper.displayName = 'ListWrapper';

// ==============================|| LIST - INTERACTIVE ||============================== //

export default function InteractiveList() {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  const interactiveListCodeString = `<FormGroup row>
  <FormControlLabel
    control={<Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />}
    label="Enable dense"
  />
  <FormControlLabel
    control={<Checkbox checked={secondary} onChange={(event) => setSecondary(event.target.checked)} />}
    label="Enable secondary text"
  />
</FormGroup>
// Text Only
<ListWrapper>
  <List dense={dense}>
    {generate(
      <ListItem divider>
        <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
      </ListItem>
    )}
  </List>
</ListWrapper>

// Icon with text
<ListWrapper>
  <List dense={dense}>
    {generate(
      <ListItem divider>
        <ListItemIcon sx={{ mr: 0.5 }}>
          <FolderOpen />
        </ListItemIcon>
        <ListItemText primary="Single item" secondary={secondary ? 'Secondary text' : null} />
      </ListItem>
    )}
  </List>
</ListWrapper>

// Avatar with text
<ListWrapper>
  <List dense={dense}>
    {generate(
      <ListItem divider>
        <ListItemAvatar>
          <AntAvatar>
            <img alt="Natacha" src={'/assets/images/users/vector-1.png'} height={40} />
          </AntAvatar>
        </ListItemAvatar>
        <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
      </ListItem>
    )}
  </List>
</ListWrapper>

// Avatar with text and icon
<ListWrapper>
  <List dense={dense}>
    {generate(
      <ListItem
        divider
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <Trash variant="Bold" />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <AntAvatar alt="Avatar" src={'/assets/images/users/avatar-4.png'} />
        </ListItemAvatar>
        <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
      </ListItem>
    )}
  </List>
</ListWrapper>`;

  return (
    <MainCard codeString={interactiveListCodeString}>
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />}
            label="Enable dense"
          />
          <FormControlLabel
            control={<Checkbox checked={secondary} onChange={(event) => setSecondary(event.target.checked)} />}
            label="Enable secondary text"
          />
        </FormGroup>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Typography sx={{ mt: 3 }} variant="h5">
              Text only
            </Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem divider>
                    <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant="h5" sx={{ mt: { xs: 0, lg: 3 } }}>
              Icon with text
            </Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem divider>
                    <ListItemIcon sx={{ mr: 0.5 }}>
                      <FolderOpen size={18} />
                    </ListItemIcon>
                    <ListItemText primary="Single item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} xl={6}>
            <Typography variant="h5">Avatar with text</Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem divider>
                    <ListItemAvatar>
                      <AntAvatar>
                        <img alt="Natacha" src={vector1} height={40} />
                      </AntAvatar>
                    </ListItemAvatar>
                    <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
          <Grid item xs={12} xl={6}>
            <Typography variant="h5">Avatar with text and icon</Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem
                    divider
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete" color="error" size="small">
                        <Trash variant="Bold" />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <AntAvatar alt="Avatar" src={avatar4} />
                    </ListItemAvatar>
                    <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
}
