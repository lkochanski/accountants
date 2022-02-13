import {alpha, AppBar, Grid, styled, useTheme} from "@mui/material";
import IconButton from "@mui/material/IconButton";

export const StyledHeader = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.palette.mode === "light"
        ? alpha(theme.palette.common.white, 0.8)
        : alpha(theme.palette.primary.main, 0.8),
    top: '24px',
    height: '100px',
    transition: 'height 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

export const StyledNavItem = styled('div')(({theme}) => ({
    a: {
        display: 'block',
        position: 'relative',
        padding: '10px',
        fontWeight: '600',
        textDecoration: 'none',
        color: theme.palette.mode === "light"
            ? 'black'
            : 'white',
        "&:after": {
            content: '""',
            background: theme.palette.mode === 'light'
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
            width: 'calc(100% + 20px)',
            height: 0,
            position: 'absolute',
            bottom: '-4px',
            left: '-10px',
            transition: 'all .1s cubic-bezier(0.445, 0.05, 0.55, 0.95)'
        },
        "&:hover:after": {
            height: '5%'
        }
    },
}));


export const StyledIconButton = styled(IconButton)(({theme}) => ({
    color: theme.palette.mode === "light"
        ? theme.palette.primary.main
        : 'white',
}));

export const StyledContactBar = styled(Grid)(({theme}) => ({
    display: 'flex',
    width: '100%',
    padding: '0 15px',
    justifyContent: 'center',
    backgroundColor: theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    a: {
        color: theme.palette.common.white,
        textDecoration: 'none',
        paddingLeft: '20px'
    }
}));

export const smallHeader = {
    height: '70px',
}

export const active = {
    color: 'red'
}

export const StyledMobileNavItem = styled('div')(({theme}) => ({
    padding: '15px 0',
    a: {
        textDecoration: 'none',
        fontSize: '40px',
        fontWeight: '600',
        color: theme.palette.mode === "light"
            ? 'black'
            : 'white',
    }
}));
