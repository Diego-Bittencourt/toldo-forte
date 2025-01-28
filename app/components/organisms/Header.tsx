import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import Link from 'next/link'

//import { MenuIcon } from '@mui/icons-material/Menu';


export default function Header () {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={"/"}>
                Toldo Forte
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={"/estimativa"}>
                Estimativa
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    )
};
