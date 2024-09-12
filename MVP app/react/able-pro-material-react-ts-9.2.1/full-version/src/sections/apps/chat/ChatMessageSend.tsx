// material-ui
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

interface Props {
  message: string;
  setMessage: (msg: string) => void;
  handleEnter: any;
}

// ==============================|| CHAT - MESSAGE SEND ||============================== //

export default function ChatMessageSend({ message, setMessage, handleEnter }: Props) {
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
