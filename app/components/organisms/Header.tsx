import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Link from 'next/link';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbar shadow">
        <Toolbar>
          <div className="logo">
            <Typography variant="h6" component="div">
              Toldo Forte
            </Typography>
          </div>
          <div className="nav-links">
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
