import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormControl,AppBar, Toolbar,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

const VideoInsights = () => {
  const [videoNames, setVideoNames] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [insights, setInsights] = useState(null);

  // Fetch the list of video names
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5225/api/Video/insights/videos');
        setVideoNames(response.data);
      } catch (error) {
        console.error('Error fetching video names:', error);
      }
    };
    fetchVideos();
  }, []);

  // Fetch insights data when a video is selected
  useEffect(() => {
    if (selectedVideo) {
      const fetchInsights = async () => {
        try {
          const response = await axios.get(`http://localhost:5225/api/Video/insights/${selectedVideo}`);
          setInsights(response.data);
        } catch (error) {
          console.error('Error fetching insights:', error);
        }
      };
      fetchInsights();
    }
  }, [selectedVideo]);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#9FB3DF' }}>
        <Toolbar>
          <Typography variant="h6">Autism Video Analysis</Typography>
        </Toolbar>
      </AppBar>
            <Container>
      {/* Dropdown for selecting video */}
      <FormControl fullWidth sx={{ mt: 4, maxWidth: 400 }}>
        <InputLabel>Select Video</InputLabel>
        <Select
          value={selectedVideo}
          onChange={(e) => setSelectedVideo(e.target.value)}
          label="Select Video"
        >
          {videoNames.map((videoName) => (
            <MenuItem key={videoName} value={videoName}>
              {videoName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {insights && (
        <div>
          {/* Language Display */}
          <Typography variant="h5" mt={4}>Video Insights for: {selectedVideo}</Typography>
          <Typography variant="h6" mt={2}>Language: {insights.language}</Typography>

          {/* Transcripts Table */}
          <Typography variant="h6" mt={2}>Transcript</Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Text</TableCell>
                  <TableCell>Confidence</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {insights.transcript?.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{item.text}</TableCell>
                    <TableCell>{item.confidence}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Speakers Table */}
          <Typography variant="h6" mt={2}>Speakers</Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Speaker Name</TableCell>
                  <TableCell>Speaker ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {insights.speakers?.map((speaker, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{speaker.name}</TableCell>
                    <TableCell>{speaker.id}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Keywords Table */}
          <Typography variant="h6" mt={2}>Keywords</Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Keyword</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {insights.keywords?.map((keyword, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{keyword.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Topics Table */}
          <Typography variant="h6" mt={2}>Topics</Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Topic</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {insights.topics?.map((topic, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{topic.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Faces Table */}
          <Typography variant="h6" mt={2}>Faces</Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Confidence</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {insights.faces?.map((face, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{face.name}</TableCell>
                    <TableCell>{face.confidence}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Sentiments Table */}
          <Typography variant="h6" mt={2}>Sentiments</Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Sentiment Type</TableCell>
                  <TableCell>Seen Duration Ratio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {insights.sentiments?.map((sentiment, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{sentiment.sentimentType}</TableCell>
                    <TableCell>{sentiment.seenDurationRatio}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Emotions Table */}
          <Typography variant="h6" mt={2}>Emotions</Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Emotion Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {insights.emotions?.map((emotion, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{emotion.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </Container>
    </>
  );
};

export default VideoInsights;
