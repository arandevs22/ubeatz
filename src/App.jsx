import { Box, Button, Container, IconButton, LinearProgress, Paper, Stack, Typography, styled } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import tracks from './data/music'
import { Download, Loop, PauseCircle, PlayCircle, Shuffle, SkipNext, SkipPrevious } from '@mui/icons-material';
import { Image } from 'mui-image'

function App() {

  const [count, setCount] = useState(0)

  const [isPlaying, setPlaying] = useState(true)

  const [currentTime, setCurrentTime] = useState(0)

  const [duration, setDuration] = useState(0)

  const [progress, setProgress] = useState(0)

  const [isLoop, setIsLoop] = useState(false)

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

  const randomBtn = () => {
    setPlaying(true)
    setCount(Math.ceil(Math.random() * tracks.length))
  }

  const toggleLoop = () => {
    setIsLoop(!isLoop)
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
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const aTag = document.createElement('a');
        aTag.href = blobUrl;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  }



  useEffect(() => {
    document.title = `${tracks[count].title} - ${tracks[count].artists[0].name}`

    document.body.style.backgroundImage = `linear-gradient(to top, #121212, ${tracks[count].primaryColor})`

  })


  const TimeLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  }))


  return (
    <div>
      <Container className='main'>

        <audio onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)} onLoadedMetadata={(e) => setDuration(e.target.duration)} ref={audioPlayer} className='audio-player' autoPlay={true} src={tracks[count].URL} onEnded={randomBtn} loop={isLoop} />

        <Box sx={{ paddingTop: 4, width: '90%', margin: 'auto', textAlign: 'center' }} mb={3}>
          <Image fit='contain' src={`https://aranstorage.blob.core.windows.net/images/${count}.jpg`} bgColor={`${tracks[count].primaryColor}`} easing='ease' />
        </Box>

        <Box mt={3} mb={1}>
          <Typography className='title' variant="h5" color="#fff">
            {tracks[count].title}
          </Typography>
        </Box>
        <Box>
          <Stack className='artist' direction="row" spacing={2}>
            {tracks[count].artists.map((artist) => (
              <Typography variant='subtitle1' color="rgba(255, 255, 255, 0.6)" key={artist.name}>
                {artist.name}
              </Typography>
            ))}
          </Stack>
        </Box>

        {count > 0 &&
          <Box mt={3} sx={{ color: `${tracks[count].primaryColor}` }}>
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

        {count === 0 ?
          <Box mt={8} mb={3}>
            <Stack className='artist' direction='row' spacing={3}>
              <Button className='random-btn' color='inherit' variant='contained' size='large' onClick={randomBtn} startIcon={<Shuffle />}>
                iniciar
              </Button>
            </Stack>
          </Box> :
          <Box mt={1} mb={3}>
            <Box className="controls-btn" >
              <IconButton onClick={toggleLoop}>
                {isLoop ? <Loop sx={{ fontSize: 30, color: '#fff' }} />
                  : <Loop sx={{ fontSize: 30, color: 'rgba(255, 255, 255, 0.3)' }} />
                }
              </IconButton>
              <IconButton onClick={randomBtn}>
                <SkipPrevious sx={{ fontSize: 40, color: '#fff' }} />
              </IconButton>
              <IconButton onClick={playButton}>
                {isPlaying ? <PauseCircle sx={{ fontSize: 70, color: '#fff' }} /> : <PlayCircle sx={{ fontSize: 70, color: '#fff' }} />}
              </IconButton>
              <IconButton onClick={randomBtn}>
                <SkipNext sx={{ fontSize: 40, color: '#fff' }} />
              </IconButton>
              <IconButton onClick={() => { downloadMp3(audioPlayer.current.currentSrc) }}>
                <Download sx={{ fontSize: 30, color: '#fff' }} />
              </IconButton>
            </Box>
          </Box>
        }

      </Container>
    </div>
  )
}

export default App
