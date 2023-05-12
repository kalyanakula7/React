import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { red } from '@mui/material/colors';

export default function BlogCard({ blog }) {
  const { id, title, datePublished, author, summary, imageUrl, blogUrl, urlToImage, url } = blog;

  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={blogUrl && 
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {author[0].toUpperCase()}
          </Avatar>
        }
        title={
          <Link target="_blank" underline='none' variant='subtitle1'  href={blogUrl || url}>
            <Typography variant='body1'>{title}
              </Typography></Link>
        }
        subheader={datePublished}
      />
      <CardMedia component="img" height="194" image={imageUrl || urlToImage} alt={title} style={url&&{ objectFit: 'cover', transformOrigin: 'center', transform: 'scale(1.1)' }}/>
      {summary && <CardContent>
        <Typography variant="body2" color="text.secondary" style={{fontSize:'1.1rem'}}>
          {summary}
        </Typography>
      </CardContent>}
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}
