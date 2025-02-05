import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Link from 'next/link';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbar shadow" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div className="logo">
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              Toldo Forte
            </Typography>
          </div>
          <div className="nav-links">
            <Link href="/sobre" passHref>
              <Typography variant="body1" component="span" 
              sx={{ marginLeft: 10, color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Sobre
              </Typography>
            </Link>
            <Link href="/contato" passHref>
              <Typography variant="body1" component="span" 
              sx={{ marginLeft: 10, color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Contato
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
