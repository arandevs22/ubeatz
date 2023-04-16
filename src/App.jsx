import { Box, Button, Container, IconButton, LinearProgress, Paper, Stack, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import tracks from './data/music'
import { Download, PauseCircle, PlayCircle, Shuffle, SkipNext } from '@mui/icons-material';

function App() {

  const [count, setCount] = useState(0)

  const [isPlaying, setPlaying] = useState(true)

  const [currentTime, setCurrentTime] = useState(0)

  const [duration, setDuration] = useState(0)

  const [progress, setProgress] = useState(0)

  const audioPlayer = useRef();

  const playButton = () => {

    const prevValue = isPlaying;

    setPlaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
    }
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

  const downloadMp3 = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }



  const randomBtn = () => {
    setPlaying(true)
    setCount(Math.ceil(Math.random() * tracks.length))
  }

  useEffect(() => {
    document.title = `${tracks[count].title} - ${tracks[count].artists[0].name}`
  })

  return (
    <div className="App">
      <Container className='main'>
        {/* <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Typography className='logo-name' variant='h5' color="#fff">
            Ubeatz
          </Typography>
          <img className="logo" src="../logo.svg" alt="logo" />
        </Box> */}

        <audio onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)} onLoadedMetadata={(e) => setDuration(e.target.duration)} ref={audioPlayer} className='audio-player' autoPlay={true} src={tracks[count].URL} onEnded={randomBtn} />

        <Box mt={5} mb={3}>
          <img className='cover' src={`https://aranstorage.blob.core.windows.net/images/${count}.jpg`} alt={`cover ${count}`} />
        </Box>

        <Box mb={1}>
          <Typography className='title' variant="h5" color="#fff">
            {tracks[count].title}
          </Typography>
        </Box>
        <Box>
          <Stack className='artist' direction="row" spacing={2}>
            {tracks[count].artists.map((artist) => (
              <Typography variant='subtitle1' color="gray" key={artist.name}>
                {artist.name}
              </Typography>
            ))}
          </Stack>
        </Box>

        {count > 0 &&
          <Box mt={5} sx={{ color: '#d32f87' }}>
            <LinearProgress color='inherit' variant='determinate' value={progress} />
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

        <Paper className='controls' elevation={3}>
          <Box mt={5} >
            {count > 0 &&
              <Stack className="artist" direction="row" spacing={3}>
                <IconButton onClick={() => { downloadMp3(tracks[count].URL) }}>
                  <Download sx={{ fontSize: 40, color: '#fff' }} />
                </IconButton>
                <IconButton onClick={playButton}>
                  {isPlaying ? <PauseCircle sx={{ fontSize: 85, color: '#fff' }} /> : <PlayCircle sx={{ fontSize: 85, color: '#fff' }} />}
                </IconButton>
                <IconButton onClick={randomBtn}>
                  <SkipNext sx={{ fontSize: 40, color: '#fff' }} />
                </IconButton>
              </Stack>
            }
          </Box>
        </Paper>

        <Box mt={8}>
          <Stack className='artist' direction='row' spacing={3}>
            {count === 0 &&
              <Button className='random-btn' color='inherit' variant='contained' size='large' onClick={randomBtn} startIcon={<Shuffle />}>
                iniciar
              </Button>
            }
          </Stack>
        </Box>
      </Container>
    </div>
  )
}

export default App
