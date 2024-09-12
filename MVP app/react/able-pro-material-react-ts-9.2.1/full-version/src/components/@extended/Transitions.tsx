import { forwardRef, ExoticComponent, ReactElement, Ref } from 'react';

// material-ui
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom, { ZoomProps } from '@mui/material/Zoom';

interface Props {
  children?: ReactElement;
  position?: string;
  in?: boolean;
  type?: string;
  direction?: 'up' | 'right' | 'left' | 'down';
  [others: string]: any;
}

// ==============================|| TRANSITIONS ||============================== //

function Transitions({ children, position = 'top-left', type = 'grow', direction = 'up', ...others }: Props, ref: Ref<ExoticComponent>) {
  let positionSX = {
    transformOrigin: '0 0 0'
  };

  switch (position) {
    case 'top-right':
      positionSX = {
        transformOrigin: 'top right'
      };
      break;
    case 'top':
      positionSX = {
        transformOrigin: 'top'
      };
      break;
    case 'bottom-left':
      positionSX = {
        transformOrigin: 'bottom left'
      };
      break;
    case 'bottom-right':
      positionSX = {
        transformOrigin: 'bottom right'
      };
      break;
    case 'bottom':
      positionSX = {
        transformOrigin: 'bottom'
      };
      break;
    case 'top-left':
    default:
      positionSX = {
        transformOrigin: '0 0 0'
      };
      break;
  }

  return (
    <Box ref={ref}>
      {type === 'grow' && (
        <Grow
          {...others}
          timeout={{
            appear: 0,
            enter: 150,
            exit: 150
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Grow>
      )}

      {type === 'collapse' && (
        <Collapse {...others} sx={positionSX}>
          {children}
        </Collapse>
      )}

      {type === 'fade' && (
        <Fade
          {...others}
          timeout={{
            appear: 0,
            enter: 300,
            exit: 150
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Fade>
      )}

      {type === 'slide' && (
        <Slide
          {...others}
          timeout={{
            appear: 0,
            enter: 150,
            exit: 150
          }}
          direction={direction}
        >
          <Box sx={positionSX}>{children}</Box>
        </Slide>
      )}

      {type === 'zoom' && (
        <Zoom {...others}>
          <Box sx={positionSX}>{children}</Box>
        </Zoom>
      )}
    </Box>
  );
}

export default forwardRef(Transitions);

// ==============================|| POPUP / DIALOG - TRANSITIONS ||============================== //

export const PopupTransition = forwardRef(function Transition(props: ZoomProps, ref: Ref<unknown>) {
  return <Zoom ref={ref} timeout={200} {...props} />;
});
