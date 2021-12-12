import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

export default function FilmViewDialog(props) {
  const { open, setOpen, cast } = props
  if (!cast) return <h1>Loading...</h1>
  return (
    <Dialog open={open} onClose={() => setOpen(false)} hideBackdrop>
      <DialogTitle>View Cast</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography component="span" color="black" fontWeight="bold">
            First Name:
          </Typography>
          <Typography component="p" color="black">
            {cast.firstName}
          </Typography>
          <Typography component="span" color="black" fontWeight="bold">
            Last Name:
          </Typography>
          <Typography component="p" color="black">
            {cast.lastName}
          </Typography>
          <Typography component="span" color="black" fontWeight="bold">
            Photo:
          </Typography>
          <img src={cast.photo} width="100%" style={{ maxHeight: 200 }} />
          <Typography component="span" color="black" fontWeight="bold">
            Films:
          </Typography>
          <Typography component="p" color="black">
            <List>
              {cast.films.map(film => (
                <ListItem>
                 <img src={cast.photo} width="100%" style={{ maxHeight: 200 }} />
                  <ListItemText>
                    {film.title} 
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Typography>
        </DialogContentText>
      </DialogContent>
     
    </Dialog>
  )
}
