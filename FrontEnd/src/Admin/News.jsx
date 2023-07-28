import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function News() {
    return (
        <section className='container-xxl' style={{ marginLeft: '240px', marginTop: '50px' }}>
            <div className='row'>
                <div className='col-4' style={{ marginBottom: '30px' }}>
                    <Card sx={{ maxWidth: 380 }}>
                        <a href='https://www.ndtv.com/topic/news-feed' target='_blank'>
                            <CardMedia
                                sx={{ height: 300 }}
                                image="/Images/news.jpeg"
                                title="News Feed"
                            />
                        </a>
                        <CardContent>
                            <Typography variant="body2" style={{ color: 'black', fontSize: '20px', fontWeight: 500, textAlign: 'center' }}>
                                News Feed
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-4' style={{ marginBottom: '30px' }}>
                    <Card sx={{ maxWidth: 380 }}>
                        <Link to={"/dash"}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image="/Images/dashboard.jpg"
                                title="News Feed"
                            />
                        </Link>
                        <CardContent>
                            <Typography variant="body2" style={{ color: 'black', fontSize: '20px', fontWeight: 500, textAlign: 'center' }}>
                                Dashboard
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-4' style={{ marginBottom: '30px' }}>
                    <Card sx={{ maxWidth: 380 }}>
                        <a href='https://www.ndtv.com/topic/news-feed' target='_blank'>
                            <CardMedia
                                sx={{ height: 300 }}
                                image="/Images/news.jpeg"
                                title="News Feed"
                            />
                        </a>
                        <CardContent>
                            <Typography variant="body2" style={{ color: 'black', fontSize: '20px', fontWeight: 500, textAlign: 'center' }}>
                                News Feed
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}