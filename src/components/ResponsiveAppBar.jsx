import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import CV from "./CV Cabrera Lucas.pdf";

const drawerWidth = 240;
const navItems = ["Proyectos", "Trayectoria", "Contacto"];

function ResponsiveAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <IntegrationInstructionsIcon></IntegrationInstructionsIcon>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              href={`#seccion-${index + 2}`}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#363062",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,

              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: {
                width: "100%",
                xs: "none",
                sm: "block",
              },
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                {navItems.map((item, index) => (
                  <Button
                    key={item}
                    href={`#seccion-${index + 2}`}
                    sx={{ color: "#fff" }}
                  >
                    {item}
                  </Button>
                ))}
              </div>
              <Button sx={{ color: "#fff" }} href={CV}>
                DESCARGAR CV
              </Button>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveAppBar;
//   return (
//     <div className={styles.header}>
//       <a className={styles.header_buttons} href="#seccion-2">
//         Proyectos
//       </a>
//       <a className={styles.header_buttons} href="#seccion-3">
//         Tecnologías y estudios
//       </a>
//       <a className={styles.header_buttons} href="#seccion-4">
//         Contacto
//       </a>
//       <a
//         download="CV Cabrera Lucas"
//         href={CV}
//         className={styles.header_downloadcv}
//       >
//         Descargar CV
//       </a>
//     </div>
//   );
