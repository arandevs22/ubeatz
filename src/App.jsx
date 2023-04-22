import { Box, Button, Container, Grid, IconButton, LinearProgress, Stack, Typography, styled } from '@mui/material'
import { Fragment, useEffect, useRef, useState } from 'react'
import tracks from './data/music'
import { Download, Loop, PauseCircle, PlayCircle, Shuffle, SkipNext, VolumeOff, VolumeUp, } from '@mui/icons-material'
import { Image } from 'mui-image'
import DownloadButton from './components/DownloadButton'

const TimeLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: 'rgba(255, 255, 255, 0.1)'
}))

function App() {

  const [count, setCount] = useState(0)

  const [isPlaying, setPlaying] = useState(true)

  const [currentTime, setCurrentTime] = useState(0)

  const [duration, setDuration] = useState(0)

  const [progress, setProgress] = useState(0)

  const [isLoop, setIsLoop] = useState(false)

  const [isMuted, setIsMuted] = useState(false)

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
    setCount(Math.ceil(Math.random() * tracks.length))
  }

  const toggleLoop = () => {
    setIsLoop(!isLoop)
  }

  const toggleMuted = () => {
    setIsMuted(!isMuted)
  }

  useEffect(() => {
    setProgress(duration > 0 ? (currentTime / duration) * 100 : 0)
  }, [currentTime, duration])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMinutes}:${returnSeconds}`;
  }

  useEffect(() => {
    document.title = `${tracks[count].title} - ${tracks[count].artists[0].name}`
    document.body.style.backgroundImage = `linear-gradient(to top, #121212, ${tracks[count].primaryColor})`

  })

  return (
    <div>
      <Container className='main'>
        <Box>
          <audio preload='true' typeof='audio/mpeg' onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)} onLoadedMetadata={(e) => setDuration(e.target.duration)} ref={audioPlayer} className='audio-player' autoPlay={true} src={`https://aranstorage.blob.core.windows.net/music/${tracks[count].title}.mp3`} onEnded={randomBtn} loop={isLoop} muted={isMuted} />
        </Box>
        {/* Cover Image */}
        <Box sx={{ paddingTop: 2, margin: 'auto', textAlign: 'center' }} mb={3}>
          <Image className='cover' fit='contain' src={`https://aranstorage.blob.core.windows.net/images/${count}.jpg`} />
        </Box>
        {/* Title & Artist Text */}
        {count === 0 ?
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
        {count > 0 &&
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
        {count === 0 ?
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
            <DownloadButton filename={tracks[count].title} fileurl={`https://drive.google.com/uc?id=${tracks[count].mp3}&export=download`} />
          </Box>
        }

      </Container>
    </div>
  )
}

export default App
