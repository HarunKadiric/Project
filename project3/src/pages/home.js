import React from 'react';
import { Container, Typography, Grid, Paper , CardActionArea } from '@mui/material';
import Slideshow from '../components/slideshow'; 

const Home = () => {
  return (
    <div className="full-width-container">
      {/*slideshow*/}
      <Slideshow />

      <Container>
        {/*posts*/}
        <Typography variant="h4" gutterBottom>
          Latest Posts
        </Typography>
        <Grid container spacing={3}>
          {/*Post 1*/}
          <Grid item xs={12} sm={6} md={4}>
          <CardActionArea>
            <Paper style={{ padding: '16px' }}>
              <img src="https://cdn.mos.cms.futurecdn.net/biPMkmHiPiVhYNUwWpmA2k.jpg" alt="Post 1" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              {/*title*/}
              <Typography variant="h6" gutterBottom>
              The Rise of Battle Royale Games
              </Typography>
              {/*description*/}
              <Typography variant="body2" gutterBottom>
              Explore how the battle royale genre has taken the gaming world by storm.
              </Typography>
              {/*author*/}
              <Typography variant="body2" color="textSecondary">
                By Daniel Thompson
              </Typography>
            </Paper>
          </CardActionArea>
          </Grid>

          {/*Post 2*/}
          <Grid item xs={12} sm={6} md={4}>
          <CardActionArea>
            <Paper style={{ padding: '16px' }}>
              <img src="https://www.rappler.com/tachyon/2022/06/video-games-june-23-2022.jpg" alt="Post 2" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              {/*title*/}
              <Typography variant="h6" gutterBottom>
              Top 10 Upcoming Games of 2024
              </Typography>
              {/*description*/}
              <Typography variant="body2" gutterBottom>
              Get excited for the most anticipated games releasing this year.
              </Typography>
              {/*author*/}
              <Typography variant="body2" color="textSecondary">
                By Jane Smith
              </Typography>
            </Paper>
          </CardActionArea>
          </Grid>

          {/*Post 3*/}
          <Grid item xs={12} sm={6} md={4}>
          <CardActionArea>
            <Paper style={{ padding: '16px' }}>
              <img src="https://esportskingdom.gg/wp-content/uploads/2023/12/cs2-screenshot-banana.jpg" alt="Post 3" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              {/*title*/}
              <Typography variant="h6" gutterBottom>
              Tips and Tricks for Mastering FPS Games
              </Typography>
              {/*description*/}
              <Typography variant="body2" gutterBottom>
              Improve your skills in first-person shooter games with these expert tips.
              </Typography>
              {/*author*/}
              <Typography variant="body2" color="textSecondary">
                By Daniel Thompson
              </Typography>
            </Paper>
          </CardActionArea>
          </Grid>
          
          {/*Post 4*/}
          <Grid item xs={12} sm={6} md={4}>
          <CardActionArea>
            <Paper style={{ padding: '16px' }}>
              <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/indie-games.jpg" alt="Post 1" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              <Typography variant="h6" gutterBottom>
                {/*title*/}
              Best Indie Games You Should Try
              </Typography>
              {/*description*/}
              <Typography variant="body2" gutterBottom>
              Check out these amazing indie games that are making waves in the gaming community.
              </Typography>
              {/*author*/}
              <Typography variant="body2" color="textSecondary">
                By Matthew Jones
              </Typography>
            </Paper>
          </CardActionArea>
          </Grid>

          {/*Post 5*/}
          <Grid item xs={12} sm={6} md={4}>
          <CardActionArea>
            <Paper style={{ padding: '16px' }}>
              <img src="https://cdn.sanity.io/images/zoz4y99f/production/63fe73d90694450859da70fe142d72e445a0a9cc-1600x900.jpg?w=1600&auto=format" alt="Post 1" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              {/*title*/}
              <Typography variant="h6" gutterBottom>
              The Evolution of Esports
              </Typography>
              {/*description*/}
              <Typography variant="body2" gutterBottom>
              Discover how esports has grown into a global phenomenon.
              </Typography>
              {/*author*/}
              <Typography variant="body2" color="textSecondary">
                By Emily Johnson
              </Typography>
            </Paper>
          </CardActionArea>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
