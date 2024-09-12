// material-ui
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

// project-imports
import NavItem from './NavItem';

// types
import { NavItemType } from 'types/menu';

interface Props {
  item: NavItemType;
}

// ==============================|| NAVIGATION - GROUP ||============================== //

export default function NavGroup({ item }: Props) {
  const navCollapse = item.children?.map((menu) => {
    switch (menu.type) {
      case 'item':
        return <NavItem key={menu.id} item={menu} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <List
      subheader={
        item.title && (
          <Typography variant="h5" color="text.primary" sx={{ mb: 1.5 }}>
            {item.title}
          </Typography>
        )
      }
      sx={{ mb: 1 }}
    >
      {navCollapse}
    </List>
  );
}
