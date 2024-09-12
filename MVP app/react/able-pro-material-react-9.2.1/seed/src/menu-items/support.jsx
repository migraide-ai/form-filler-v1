// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { ShieldCross, I24Support } from 'iconsax-react';

// type

// icons
const icons = {
  disabledMenu: ShieldCross,
  documentation: I24Support
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const support = {
  id: 'other',
  type: 'group',
  children: [
    {
      id: 'disabled-menu',
      title: <FormattedMessage id="disabled-menu" />,
      type: 'item',
      url: '#',
      icon: icons.disabledMenu,
      disabled: true
    },

    {
      id: 'documentation',
      title: <FormattedMessage id="documentation" />,
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/',
      icon: icons.documentation,
      external: true,
      target: true,
      chip: {
        label: 'gitbook',
        color: 'info',
        size: 'small'
      }
    }
  ]
};

export default support;
