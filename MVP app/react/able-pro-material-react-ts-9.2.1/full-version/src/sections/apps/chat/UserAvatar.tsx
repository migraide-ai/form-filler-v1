// material-ui
import Badge from '@mui/material/Badge';

// project-imports
import AvatarStatus from './AvatarStatus';
import Avatar from 'components/@extended/Avatar';

import { ImagePath, getImageUrl } from 'utils/getImageUrl';

// types
import { UserProfile } from 'types/user-profile';

interface UserAvatarProps {
  user: UserProfile;
}

// ==============================|| CHAT - USER AVATAR WITH STATUS ICON ||============================== //

export default function UserAvatar({ user }: UserAvatarProps) {
  return (
    <Badge
      overlap="circular"
      badgeContent={<AvatarStatus status={user.online_status!} />}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{ '& .MuiBox-root': { width: 6, height: 6 }, padding: 0, minWidth: 12, '& svg': { bgcolor: '#fff', borderRadius: '50%' } }}
    >
      <Avatar alt={user.name} src={user.avatar && getImageUrl(`${user.avatar}`, ImagePath.USERS)} />
    </Badge>
  );
}
