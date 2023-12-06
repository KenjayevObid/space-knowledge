import {
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import Contact from "../Contact/Contact";
function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Stack>
        <Grid container>
          <Grid
            container
            py={6}
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              mt: 3,
              width: "100%",
            }}
            // style={{ backgroundColor: "#346470" }}
          >
            <Grid item xl={3}>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{ fontSize: "18px" }}
              >
                About Us
              </Typography>
              <List
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <ListItem sx={{ paddingLeft: 1 }}>
                  <NavLink style={navLinkStyle}></NavLink>
                  <a href="https://instagram.com/jdu.uz?igshid=OGQ5ZDc2ODk2ZA" target="_blank" rel="noopener noreferrer"><InstagramIcon sx={{ color: "#f0040f" }} /></a>
                </ListItem>
                <ListItem sx={{ paddingLeft: 1 }}>
                  <NavLink style={navLinkStyle}></NavLink>
                  <a href="https://www.facebook.com/jdu.uz/" target="_blank" rel="noopener noreferrer"><FacebookIcon sx={{ color: "#3b5998" }} /></a>
                </ListItem>
                <ListItem sx={{ paddingLeft: 1 }}>
                  <NavLink style={navLinkStyle}></NavLink>
                  <a href="https://t.me/jduniversity_uz" target="_blank" rel="noopener noreferrer"><TelegramIcon sx={{ color: "#23a0dd" }} /></a>
                </ListItem>
                <ListItem sx={{ paddingLeft: 1 }}>
                  <NavLink style={navLinkStyle}></NavLink>
                  <a href="https://www.youtube.com/channel/UCWmc_PkRFw0AKv4oogUpa6w" target="_blank" rel="noopener noreferrer"><YouTubeIcon sx={{ color: "red" }} /></a>
                </ListItem>
              </List>
            </Grid>
            <Grid item xl={3}>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{ fontSize: "18px" }}
              >
                For Users
              </Typography>
              <List>
                <ListItem
                  sx={{ paddingLeft: 0 }}
                  onClick={() => console.log(setOpen(!open))}
                >
                  <Contact open={open} />
                  <NavLink style={navLinkStyle}>Contact us</NavLink>
                </ListItem>
                <ListItem sx={{ paddingLeft: 0 }}>
                  <NavLink style={navLinkStyle}>More information</NavLink>
                </ListItem>
              </List>
            </Grid>
            <Grid item xl={3}>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{ fontSize: "18px" }}
              >
                For Knowledge Centers
              </Typography>
              <List>
                <ListItem sx={{ paddingLeft: 0 }}>
                  <NavLink style={navLinkStyle}>Advertise with us</NavLink>
                </ListItem>
                <ListItem sx={{ paddingLeft: 0 }}>
                  <NavLink style={navLinkStyle}>Doc</NavLink>
                </ListItem>
              </List>
            </Grid>
            <Grid item xl={3}>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{ fontSize: "18px" }}
              >
                Download the App
              </Typography>
              <List>
                <ListItem sx={{ paddingLeft: 0 }}>
                  <ListItemIcon sx={{ marginRight: -3, color: "black" }}>
                    <AppleIcon />
                  </ListItemIcon>
                  <a
                    href="http://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    App Store
                  </a>
                </ListItem>
              </List>
              <List>
                <ListItem sx={{ paddingLeft: 0 }}>
                  <ListItemIcon sx={{ marginRight: -3, color: "black" }}>
                    <ShopIcon />
                  </ListItemIcon>
                  <a
                    href="https://play.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Play Market
                  </a>
                </ListItem>
              </List>

              <Typography variant="subtitle2" fontWeight="bold">
                Our Social Networks
              </Typography>
            </Grid>
          </Grid>
          <Grid container py={2}>
            <Grid item xl={12} textAlign="center">
              <Typography variant="subtitle2">
                &copy; 2023 JDU System All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}

const navLinkStyle = {
  color: "#072556",
  textDecoration: "none",
};

export default Footer;
