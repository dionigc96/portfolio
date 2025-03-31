import { useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  CardActionArea,
  Chip,
  Typography,
  Box,
  Stack,
  IconButton,
  Paper
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform.',
    image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS', 'Material-UI'],
  },
  {
    title: 'Task Management App',
    description: 'Kanban-style app with drag-and-drop and live updates.',
    image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    tech: ['React', 'Firebase', 'TypeScript'],
  },
  {
    title: 'Finance Dashboard',
    description: 'Track expenses, income and investment performance.',
    image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    tech: ['Vue.js', 'Chart.js', 'Supabase'],
  },
  {
    title: 'Finance Dashboard',
    description: 'Track expenses, income and investment performance.',
    image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    tech: ['Vue.js', 'Chart.js', 'Supabase'],
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // Ejecutar la animación solo una vez
    });
  }, []);

  return (
    <section id="projects" style={{ padding: '2rem' }} data-aos="fade-up">
      <Box textAlign="center" mb={4} mt={5}>
          <Paper
            elevation={1}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              backgroundColor: 'var(--white-color)',
            }}
          >
            <PersonIcon sx={{ fontSize: 20, color: 'black', mr: 1 }} />
            <Typography variant="body2" sx={{ color: 'black' }}>
              My Projects
            </Typography>
          </Paper>
        </Box>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            color: 'var(--grey-parraf)',
            fontSize: '1.25rem',
            marginBottom: '2rem'
          }}
        >
          Get to know more about my background and expertise
        </Typography>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 40 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1200: { slidesPerView: 3, spaceBetween: 20 },
          1536: { slidesPerView: 3, spaceBetween: -100 }, 
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                maxWidth: 400,
                m: 'auto',
                borderRadius: 4,
                boxShadow: 0,
                outline: '1px solid',
                outlineColor: 'grey.300',
                height: 450, // Altura fija para todas las tarjetas
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <CardHeader title={project.title} />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3, // Limitar a 3 líneas
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" mb={2} rowGap={1} justifyContent={'start'}>
                    {project.tech.map((tag, i) => (
                      <Chip key={i} label={tag} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Box>
                  <IconButton>
                    <GitHubIcon />
                  </IconButton>
                  <IconButton>
                    <LaunchIcon />
                  </IconButton>
                </Box>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'var(--grey-parraf)', // Oscurecer ligeramente al pasar el ratón
                    },
                  }}
                >
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
