import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

export default function FilmViewDialog(props) {
  const { open, setOpen, film } = props
  if (!film) return <h1>Loading...</h1>
  return (
    <Dialog open={open} onClose={() => setOpen(false)} hideBackdrop>
      <DialogTitle>View Film</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography component="span" color="black" fontWeight="bold">
            Title:
          </Typography>
          <Typography component="p" color="black">
            {film.title}
          </Typography>
          <Typography component="span" color="black" fontWeight="bold">
            Description:
          </Typography>
          <Typography component="p" color="black">
            {film.description}
          </Typography>
          <Typography component="span" color="black" fontWeight="bold">
            Poster:
          </Typography>
          <img src={film.poster} width="100%" style={{ maxHeight: 200 }} />
          <Typography component="span" color="black" fontWeight="bold">
            Actors:
          </Typography>
          <Typography component="p" color="black">
            <List>
              {film.actors.map(actor => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={actor.photo} alt="" />
                  </ListItemAvatar>
                  <ListItemText>
                    {actor.firstName} {actor.lastName}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Disagree</Button>
        <Button onClick={() => setOpen(false)} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
