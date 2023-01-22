import { Box, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import CookieBanner from "./components/app.cookie.banner";
import AppRoutes from "./routes";

function App() {
  const [open, setOpen] = useState(false);

  const handleCookieClose = () => {
    setOpen(false);
  };

  const handleCookieOpen = () => {
    let cookieName = getCookie('cookiePolicy');
    if (cookieName !== '') {
      //cookie is present
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const getCookie = (cookieName) => {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let total = decodedCookie.split(';');
    for (let i = 0; i < total.length; i++) {
      let cookie = total[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
  };

  const handleCookieAccepted = () => {
    const expiry = new Date();
    //let us save the cookie for 1 month
    expiry.setTime(expiry.getTime() + (30 * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + expiry.toUTCString();
    document.cookie = 'cookiePolicy=accepted;' + expires;
    setOpen(false);
  };

  const handleCookieDeclined = () => {
    setOpen(false);
    //let us save the cookie for the current session only
    //use the default expiry : session
    document.cookie = "cookiePolicy=declined";
  }


  return (
    <Box onLoad={handleCookieOpen} sx={{ margin: 0 }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppRoutes />
      </Box>
      <CookieBanner open={open} handleCookieAccepted={handleCookieAccepted}
        handleCookieClose={handleCookieClose} handleCookieDeclined={handleCookieDeclined} />
    </Box>);
}

export default App;
