import React, { useState } from 'react';
import axios from 'axios';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [insightData, setInsightData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
    } else {
      alert('Please select a valid video file.');
    }
  };

  const handleUpload = async () => {
    if (!videoFile) {
      alert('Please select a video first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', videoFile);

    try {
      const response = await axios.post(
        'http://localhost:5225/api/Video/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('Upload success:', response.data);
      setUploadedFileName(response.data.fileName);
      alert('Video uploaded successfully!');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Video upload failed.');
    }
  };

  const handleSubmit = async () => {
    if (!uploadedFileName) return;

    try {
      const insightsResponse = await axios.get(`http://localhost:5225/api/Video/insights/${uploadedFileName}`);
      setInsightData(insightsResponse.data);
    } catch (error) {
      console.error('Fetching insights failed:', error);
      alert('Failed to fetch insights.');
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#9FB3DF' }}>
        <Toolbar>
          <Typography variant="h6">Autism Video Analysis</Typography>
        </Toolbar>
      </AppBar>
  
      <Container sx={{ mt: 4 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button variant="contained" component="label">
            Choose Video
            <input hidden accept="video/*" type="file" onChange={handleFileChange} />
          </Button>
  
          {videoFile && (
            <>
              <Typography mt={2}>Selected file: {videoFile.name}</Typography>
              <Button sx={{ mt: 2 }} variant="contained" color="primary" onClick={handleUpload}>
                Upload
              </Button>
            </>
          )}
  
          {uploadedFileName && (
            <Button sx={{ mt: 3 }} variant="contained" color="secondary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </Box>
  
        {insightData && (
          <>
            <Box mt={5}>
              <Typography variant="h6" gutterBottom>Language</Typography>
              <Typography>{insightData.language.name}</Typography>

            </Box>
  
            {/* Transcript Table */}
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Transcript</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Text</TableCell>
                      <TableCell>Confidence</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {insightData.transcript.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.text}</TableCell>
                        <TableCell>{row.confidence}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
  
            {/* Sentiments */}
            {insightData.sentiments?.length > 0 && (
              <Box mt={4}>
                <Typography variant="h6" gutterBottom>Sentiments</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Sentiment Type</TableCell>
                        <TableCell>Seen Duration Ratio</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {insightData.sentiments.map((sentiment, index) => (
                        <TableRow key={index}>
                          <TableCell>{sentiment.sentimentType}</TableCell>
                          <TableCell>{sentiment.seenDurationRatio}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
  
            {/* Emotions */}
            {insightData.emotions?.length > 0 && (
              <Box mt={4}>
                <Typography variant="h6" gutterBottom>Emotions</Typography>
                <ul>
                  {insightData.emotions.map((emotion, index) => (
                    <li key={index}>{emotion}</li>
                  ))}
                </ul>
              </Box>
            )}
  
            {/* Speakers */}
            {insightData.speakers?.length > 0 && (
              <Box mt={4}>
                <Typography variant="h6" gutterBottom>Speakers</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Speaker Name</TableCell>
                        <TableCell>Speaker ID</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {insightData.speakers.map((speaker, index) => (
                        <TableRow key={index}>
                          <TableCell>{speaker.speakerName}</TableCell>
                          <TableCell>{speaker.speakerId}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
  
            {/* Keywords */}
            {insightData.keywords?.length > 0 && (
              <Box mt={4}>
                <Typography variant="h6" gutterBottom>Keywords</Typography>
                <ul>
                  {insightData.keywords.map((keyword, index) => (
                    <li key={index}>{keyword}</li>
                  ))}
                </ul>
              </Box>
            )}
  
            {/* Topics */}
            {insightData.topics?.length > 0 && (
              <Box mt={4}>
                <Typography variant="h6" gutterBottom>Topics</Typography>
                <ul>
                  {insightData.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </Box>
            )}
  
            {/* Faces */}
            {insightData.faces?.length > 0 && (
              <Box mt={4}>
                <Typography variant="h6" gutterBottom>Faces Detected</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Confidence</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {insightData.faces.map((face, index) => (
                        <TableRow key={index}>
                          <TableCell>{face.name}</TableCell>
                          <TableCell>{face.confidence}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </>
        )}
      </Container>
    </>
  );
  
  
};

export default UploadVideo;
