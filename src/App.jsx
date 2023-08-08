import { AppBar, Dialog, List, ListItem, ListItemText, Slide, Toolbar, Box, Button, Container, IconButton, LinearProgress, Stack, Typography, styled, Switch, alpha } from '@mui/material'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import { Loop, PauseCircle, PlayCircle, Shuffle, SkipNext, VolumeOff, VolumeUp, QueueMusic, ExpandMore, Hd } from '@mui/icons-material'
import { Image } from 'mui-image'
import { pink } from '@mui/material/colors';
import DownloadButton from './components/DownloadButton'
import tracks from './data/music'
import logo from '../public/logo.svg'

const TimeLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: 'rgba(255, 255, 255, 0.1)'
}))

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const HdSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[50],
    '&:hover': {
      backgroundColor: alpha(pink[50], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[50],
  },
}))

const OffSet = styled('div')(({ theme }) => theme.mixins.toolbar)


function App() {

  const [count, setCount] = useState(-1)

  const [isPlaying, setPlaying] = useState(true)

  const [currentTime, setCurrentTime] = useState(0)

  const [duration, setDuration] = useState(0)

  const [progress, setProgress] = useState(0)

  const [isLoop, setIsLoop] = useState(false)

  const [isMuted, setIsMuted] = useState(false)

  const [open, setOpen] = useState(false)

  const [selectedIndex, setSelectIndex] = useState(-1)

  const [hightQuality, setHightQuality] = useState(true)

  const audioPlayer = useRef()

  const playButton = () => {

    const prevValue = isPlaying;

    setPlaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
    }
  }

  const randomBtn = () => {
    setPlaying(true)
    setCount(Math.floor(Math.random() * tracks.length))
  }

  const toggleLoop = () => {
    setIsLoop(!isLoop)
  }

  const toggleMuted = () => {
    setIsMuted(!isMuted)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleIndex = (index) => {
    setSelectIndex(index)
    setCount(index)
    setOpen(false)
  }

  const handleHd = () => {
    setHightQuality(!hightQuality)
  }

  useEffect(() => {
    setProgress(duration > -1 ? (currentTime / duration) * 100 : 0)
  }, [currentTime, duration])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMinutes}:${returnSeconds}`;
  }

  useEffect(() => {
    count === -1 ?
      document.body.style.backgroundImage = `linear-gradient(to top, #121212, #232323)` :
      document.body.style.backgroundImage = `linear-gradient(to top, #121212, ${tracks[count].primaryColor})`
  })

 


  return (
    <div>
      <Container className='main'>
        {
          count > -1 &&
          <audio preload='true' typeof='audio/mpeg' onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)} onLoadedMetadata={(e) => setDuration(e.target.duration)} ref={audioPlayer} className='audio-player' autoPlay={true} src={`https://www.mediafire.com/file_premium/${tracks[count].mp3}/${tracks[count].id}.mp3`} onEnded={randomBtn} loop={isLoop} muted={isMuted} />
        }
        {/* PlayList */}
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 2, alignItems: 'center' }}>
          <img className='logo' src={logo} alt={logo} />
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton onClick={handleClickOpen}>
              <QueueMusic sx={{ color: '#fff', fontSize: 30 }} />
            </IconButton>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <AppBar sx={{ position: 'fixed' }}>
                <Toolbar>
                  <QueueMusic sx={{ color: '#fff', fontSize: 30 }} />
                  <Typography sx={{ ml: 2, flexGrow: 1 }} variant='h6' component='div'>
                    Lista de Reproduccion
                  </Typography>
                  <IconButton
                    edge='start'
                    onClick={handleClose}
                    arial-label='close'
                  >
                    <ExpandMore sx={{ color: '#fff', fontSize: 30 }} />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <OffSet />
              <List sx={{ marginTop: 1 }}>
                {tracks.map((songs, index) => (
                  <ListItem button key={index} onClick={() => handleIndex(index)}>
                    <ListItemText primary={songs.title} secondary={songs.artists[0].name} />
                  </ListItem>
                )).reverse()}
              </List>
            </Dialog>
          </Box>
        </Box>
        {/* Cover Image */}
        {count === -1 ?
          <Box sx={{ paddingTop: 2, margin: 'auto', textAlign: 'center', width: '90%' }} mb={3}>
            <Image className='cover' fit='contain' src={`https://firebasestorage.googleapis.com/v0/b/ubeatz-88976.appspot.com/o/images%2Fcover.jpg?alt=media&token=04950ae0-c41d-4b6e-b19f-7fbea0904561`} />
          </Box> :
          <Box sx={{ paddingTop: 2, margin: 'auto', textAlign: 'center', width: '90%' }} mb={3}>
            <Image className='cover' fit='contain' src={`https://firebasestorage.googleapis.com/v0/b/ubeatz-88976.appspot.com/o/images%2F${tracks[count].id}.jpg?alt=media&token=94890a29-f152-4a5f-8102-05e790ce0afe`} />
          </Box>
        }
        {/* Title & Artist Text */}
        {count === -1 ?
          <Box mt={3}>
            <Typography mb={1} className='title2' variant='h6' color='#fff'>
              Welcome to Ubeatz Radio
            </Typography>
            <Typography variant='subtitle1' color={'rgba(255, 255, 255, 0.5)'}>
              Toca Iniciar
            </Typography>
          </Box> :
          <Box mt={3} mb={3}>
            <Typography className='title' variant='h6' color='#fff'>
              {tracks[count].title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              {tracks[count].artists.map((artist, index) => (
                <Fragment key={artist.name}>
                  <Typography className='artist' variant='subtitle1' color='rgba(255, 255, 255, 0.5)'>
                    {artist.name}
                  </Typography>
                  {index !== tracks[count].artists.length - 1 && (
                    <Typography className='comma' variant='subtitle1' color='rgba(255, 255, 255, 0.5)'>
                      , &nbsp;
                    </Typography>
                  )}
                </Fragment>
              ))}
            </Box>
          </Box>
        }
        {/* Time Progress Bar */}
        {count > -1 &&
          <Box sx={{ margin: 'auto', color: '#fff' }}>
            <Box mb={1}>
              <TimeLinearProgress color='inherit' variant='determinate' value={progress} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1" color="#fff">
                {calculateTime(currentTime)}
              </Typography>
              <Typography variant="body1" color="#fff">
                {calculateTime(duration)}
              </Typography>
            </Box>
          </Box>
        }
        {/* Control Buttons */}
        {count === -1 ?
          <Box mt={8} mb={3}>
            <Stack className='artist' direction='row' spacing={3}>
              <Button className='random-btn' color='inherit' variant='contained' size='large' onClick={randomBtn} startIcon={<Shuffle />}>
                iniciar
              </Button>
            </Stack>
          </Box> :
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'auto' }} mb={2}>
            <IconButton onClick={toggleMuted}>
              {isMuted ? <VolumeOff sx={{ fontSize: 30, color: '#fff' }} /> :
                <VolumeUp sx={{ fontSize: 30, color: '#fff' }} />
              }
            </IconButton>
            <IconButton onClick={toggleLoop}>
              {isLoop ? <Loop sx={{ fontSize: 30, color: '#fff' }} />
                : <Loop sx={{ fontSize: 30, color: 'rgba(255, 255, 255, 0.3)' }} />
              }
            </IconButton>
            <IconButton onClick={playButton}>
              {isPlaying ? <PauseCircle sx={{ fontSize: 80, color: '#fff' }} /> : <PlayCircle sx={{ fontSize: 80, color: '#fff' }} />}
            </IconButton>
            <IconButton onClick={randomBtn}>
              <SkipNext sx={{ fontSize: 30, color: '#fff' }} />
            </IconButton>
            <DownloadButton filename={tracks[count].title} fileurl={`https://www.mediafire.com/file_premium/${tracks[count].mp3}/${tracks[count].id}.mp3`} />
          </Box>
        }
      </Container>
    </div>
  )
}

export default App
