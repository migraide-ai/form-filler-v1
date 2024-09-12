import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// project-imports
import useConfig from 'hooks/useConfig';

// header style
const headerSX = { p: 2.5, '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' } };

// ==============================|| CUSTOM - MAIN CARD ||============================== //

function MainCard(
  {
    border = true,
    boxShadow = true,
    children,
    subheader,
    content = true,
    contentSX = {},
    darkTitle,
    divider = true,
    elevation,
    secondary,
    shadow,
    sx = {},
    title,
    codeHighlight = false,
    codeString,
    modal = false,
    ...others
  },
  ref
) {
  const theme = useTheme();
  const { themeContrast } = useConfig();

  return (
    <Card
      elevation={elevation || 0}
      ref={ref}
      {...others}
      sx={{
        position: 'relative',
        border: border ? '1px solid' : 'none',
        borderRadius: 1.5,
        borderColor: theme.palette.divider,
        ...(((themeContrast && boxShadow) || shadow) && {
          boxShadow: shadow ? shadow : theme.customShadows.z1
        }),
        ...(codeHighlight && {
          '& pre': {
            m: 0,
            p: '12px !important',
            fontFamily: theme.typography.fontFamily,
            fontSize: '0.75rem'
          }
        }),
        ...(modal && {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: `calc( 100% - 50px)`, sm: 'auto' },
          '& .MuiCardContent-root': {
            overflowY: 'auto',
            minHeight: 'auto',
            maxHeight: `calc(100vh - 200px)`
          }
        }),
        ...sx
      }}
    >
      {/* card header and action */}
      {!darkTitle && title && (
        <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} subheader={subheader} />
      )}
      {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}

      {/* content & header divider */}
      {title && divider && <Divider />}

      {/* card content */}
      {content && <CardContent sx={contentSX}>{children}</CardContent>}
      {!content && children}

      {/* card footer - clipboard & highlighter  */}
      {codeString && (
        <>
          <Divider sx={{ borderStyle: 'dashed' }} />
        </>
      )}
    </Card>
  );
}

export default forwardRef(MainCard);

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  subheader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.bool,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  divider: PropTypes.bool,
  elevation: PropTypes.number,
  secondary: PropTypes.any,
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  codeHighlight: PropTypes.bool,
  codeString: PropTypes.string,
  modal: PropTypes.bool,
  others: PropTypes.any
};
