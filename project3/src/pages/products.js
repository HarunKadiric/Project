import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Razer Gaming Headphones',
    description: 'Razer Headphones to enhance your gaming experience',
    image: 'https://theaureview.com/wp-content/uploads/2020/01/dims.jpg',
    url: 'https://www.razer.com/'
  },
  {
    id: 2,
    name: 'Logitech Gaming Mouse',
    description: 'Precision and comfort for competitive gaming',
    image: 'https://assets.hardwarezone.com/img/2020/11/Logitech_Mouse_1.jpg',
    url: 'https://www.logitech.com/'
  },
  {
    id: 3,
    name: 'Corsair Mechanical Keyboard',
    description: 'Durable and responsive keys for fast action',
    image: 'https://pcper.com/wp-content/uploads/2020/10/corsair-k100-rgb-0414-1280x640.jpg',
    url: 'https://www.corsair.com/us/en'
  },
  {
    id: 4,
    name: 'Artisan Mousepad',
    description: 'The best for high precision mouse movement',
    image: 'https://ausmodshop.com/cdn/shop/collections/Untitled.png?v=1712655236',
    url: 'https://www.artisan-jp.com/nj_index_eng.html/'
  },
  {
    id: 5,
    name: 'ASUS Gaming Monitor',
    description: '4K Ultra HD gaming monitor with high refresh rate',
    image: 'https://external-preview.redd.it/asus-rog-swift-oled-pg32ucdm-review-the-best-gaming-monitor-v0-1eG9_OhfW-R4Jfa1jzEZoT2h46tPvsjUqCc9PNjbw6Q.jpg?width=1080&crop=smart&auto=webp&s=5eab68b7ea2b604319ed31ab67230ce511c42c3b',
    url: 'https://www.asus.com/'
  },
  {
    id: 6,
    name: 'SteelSeries Gaming Chair',
    description: 'Ergonomic gaming chair for long gaming sessions',
    image: 'https://www.consolemonster.com/wp-content/uploads/2017/08/IMG_4101.jpg',
    url: 'https://steelseries.com/'
  },
];

const Products = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Recommended Gaming Products
      </Typography>
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
            <CardActionArea onClick={() => window.open(product.url, '_blank')}>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
