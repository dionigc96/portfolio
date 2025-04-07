import { useState, useEffect } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemText, Box, useMediaQuery, useTheme, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SocialIconButton from '../Utils/SocialIconButton';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detecta si la pantalla es pequeña

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      if (isOpen) {
        header.style.opacity = '0.5'; // Reduce la opacidad del header
        header.style.pointerEvents = 'none'; // Deshabilita la interacción
      } else {
        header.style.opacity = '1'; // Restaura la opacidad
        header.style.pointerEvents = 'auto'; // Habilita la interacción
      }
    }
  }, [isOpen]);

  return (
    <div>
      {/* Botón de hamburguesa visible solo en pantallas pequeñas */}
      {isMobile && (
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{
            visibility: isOpen ? 'hidden' : 'visible', // Oculta el botón cuando el menú está abierto
            opacity: isOpen ? 0 : 1, // Cambia la opacidad para una transición suave
            transition: 'opacity 0.3s ease', // Transición suave
            color: 'var(--primary-color)',
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Drawer para el menú en pantallas pequeñas */}
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)} disableScrollLock>
        <Box
          sx={{
            width: 250,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between', // Asegura que las banderas estén visibles al final
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Botón de cerrar */}
          <IconButton
            sx={{
              alignSelf: 'flex-end',
              m: 1,
              color: 'var(--primary-color)', // Aplica el color primario
            }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>

          {/* Lista de enlaces */}
          <List>
            <ListItemButton component="a" href="#home" className="nav-link">
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton component="a" href="#projects" className="nav-link">
              <ListItemText primary="Projects" />
            </ListItemButton>
            <ListItemButton component="a" href="#about" className="nav-link">
              <ListItemText primary="About" />
            </ListItemButton>
            <ListItemButton component="a" href="#services" className="nav-link">
              <ListItemText primary="Services" />
            </ListItemButton>
            <ListItemButton component="a" href="#contact" className="nav-link">
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>

          {/* Botones de idioma */}
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
            <SocialIconButton href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
                alt="Español"
                style={{
                  width: 24,
                  height: 24,
                  objectFit: 'contain', // Mantiene la proporción de la imagen
                }}
              />
            </SocialIconButton>
            <SocialIconButton href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                alt="English"
                style={{
                  width: 24,
                  height: 24,
                  objectFit: 'contain', // Mantiene la proporción de la imagen
                }}
              />
            </SocialIconButton>
          </Stack>
        </Box>
      </Drawer>

      {/* Menú normal para pantallas grandes */}
      {!isMobile && (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', p: 2 }}>
          <ListItemButton component="a" href="#home">
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component="a" href="#projects">
            <ListItemText primary="Projects" />
          </ListItemButton>
          <ListItemButton component="a" href="#about">
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton component="a" href="#services">
            <ListItemText primary="Services" />
          </ListItemButton>
          <ListItemButton component="a" href="#contact">
            <ListItemText primary="Contact" />
          </ListItemButton>

          {/* Botones de idioma */}
          <Stack direction="column" spacing={-2}>
            <SocialIconButton href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
                alt="Español"
                style={{
                  width: 24,
                  height: 24,
                  objectFit: 'contain', // Mantiene la proporción de la imagen
                }}
              />
            </SocialIconButton>
            <SocialIconButton href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                alt="English"
                style={{
                  width: 24,
                  height: 24,
                  objectFit: 'contain', // Mantiene la proporción de la imagen
                }}
              />
            </SocialIconButton>
          </Stack>
        </Box>
      )}
    </div>
  );
};

export default NavMenu;
