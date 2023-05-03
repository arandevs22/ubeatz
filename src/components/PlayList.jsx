import { Close, PlayCircle } from '@mui/icons-material';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { AppBar, Avatar, Dialog, IconButton, List, ListItem, ListItemAvatar, ListItemText, Slide, Toolbar, Typography } from '@mui/material';
import { forwardRef, useState } from 'react';
import tracks from '../data/music';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
})

const PlayList = (index) => {

    const [open, setOpen] = useState(false)

    const [selectedIndex, setSelectIndex] = useState(-1)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleIndex = (index) => {
        setSelectIndex(index)
    }

   console.log(selectedIndex)

    return (
        <>
            <IconButton onClick={handleClickOpen}>
                <QueueMusicIcon sx={{ color: '#fff', fontSize: 30 }} />
            </IconButton>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'fixed' }}>
                    <Toolbar>
                        <QueueMusicIcon sx={{ color: '#fff', fontSize: 30 }} />
                        <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
                            Playlist
                        </Typography>
                        <IconButton
                            edge='start'
                            onClick={handleClose}
                            arial-label='close'
                        >
                            <Close sx={{ color: '#fff', fontSize: 30 }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List>
                    {tracks.map((songs, index) => (
                        <ListItem button key={index} secondaryAction={
                            <IconButton
                              onClick={() => handleIndex(index)}
                             >
                                <PlayCircle sx={{ color: '#fff', fontSize: 30 }} />
                            </IconButton>
                        }>
                            <ListItemAvatar>
                                <Avatar alt={songs.title} src={`https://aranstorage.blob.core.windows.net/ubeatz/${songs.id}.jpg`} />
                            </ListItemAvatar>
                            <ListItemText primary={songs.title} secondary={songs.artists[0].name} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        </>
    )
}

export default PlayList;