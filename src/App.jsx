import { Box, Button, Container, IconButton, LinearProgress, Link, Slider, Stack, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import tracks from './data/music'
import { Download, PauseCircle, PlayCircle, Shuffle } from '@mui/icons-material';


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

  const downloadMp3 = (url) => {
    fetch(url).then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = blobUrl;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
  }

  const randomBtn = () => {
    setPlaying(true)
    setCount(Math.floor(Math.random() * 52) + 1)
  }


  return (
    <div className="App">
      <Container className='main'>
        <Box mt={10} mb={3} >
          <img className='cover' src={`https://aranstorage.blob.core.windows.net/images/${count}.jpg`} alt={`cover ${count}`} />
        </Box>
        <Box mb={1}>
          <Typography variant="h6" color="#fff">
            {tracks[count].title}
          </Typography>
        </Box>
        <Box mb={3}>
          <Stack className='artist' direction="row" spacing={2}>
            {tracks[count].artists.map((artist) => (
              <Typography variant='subtitle1' color="gray" key={artist.name}>
                {artist.name}
              </Typography>
            ))}
          </Stack>
        </Box>
        <Box mb={5} sx={{ color: '#d32f87' }}>
          {count > 0 && <LinearProgress color='inherit' variant='determinate' value={progress} />}
        </Box>
        <Box mb={5}>
          {count > 0 &&
            <IconButton onClick={playButton}>
              {isPlaying ? <PauseCircle sx={{ fontSize: 70, color: '#fff' }} /> : <PlayCircle sx={{ fontSize: 70, color: '#fff' }} />}
            </IconButton>}
        </Box>
        <Box>
          <audio onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)} onLoadedMetadata={(e) => setDuration(e.target.duration)} ref={audioPlayer} className='audio-player' loop={true} autoPlay={true} src={tracks[count].URL}></audio>
        </Box>
        <Box mb={5}>
          <Stack className='artist' direction='row' spacing={3}>
            {count === 0 ? <Button className='random-btn' color='inherit' variant='contained' size='medium' onClick={randomBtn} startIcon={<PlayCircle />}>
              iniciar
            </Button> :
              <>
                <Button className='random-btn' color='inherit' variant='contained' size='medium' onClick={() => { downloadMp3(tracks[count].URL) }} startIcon={<Download />}>
                  Descargar
                </Button>
                <Button className='random-btn' color='inherit' variant='contained' size='medium' onClick={randomBtn} startIcon={<Shuffle />}>
                  Siguiente
                </Button>
              </>
            }
          </Stack>
        </Box>
      </Container>
    </div>
  )
}

export default App
