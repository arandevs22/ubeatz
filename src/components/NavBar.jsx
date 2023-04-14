import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material"

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const NavBar = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Box sx={{ mr: 2 }}>
                        <img className="logo" src="../logo.svg" alt="logo" />
                    </Box>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    )
}


export default NavBar;