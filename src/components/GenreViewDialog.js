
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

export default function GenreViewDialog(props) {
  const { open, setOpen, genre } = props
  if (!genre) return <h1>Loading...</h1>
  
  return (
    <Dialog open={open} onClose={() => setOpen(false)} hideBackdrop>
      <DialogTitle>View Genre</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography component="span" color="black" fontWeight="bold">
            Name:
          </Typography>
          <Typography component="p" color="black">
            {genre.name}
          </Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>
    )
}