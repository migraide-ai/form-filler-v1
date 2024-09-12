import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

// ==============================|| CHAT - MESSAGE SEND ||============================== //

export default function ChatMessageSend({ message, setMessage, handleEnter }) {
  const theme = useTheme();

  return (
    <TextField
      fullWidth
      multiline
      rows={4}
      placeholder="Your Message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={handleEnter}
      variant="standard"
      sx={{ pr: 2, '& .MuiInput-root:before': { borderBottomColor: theme.palette.divider } }}
    />
  );
}

ChatMessageSend.propTypes = { message: PropTypes.string, setMessage: PropTypes.func, handleEnter: PropTypes.any };
