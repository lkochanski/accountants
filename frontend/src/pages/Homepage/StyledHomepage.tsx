import {Paper, styled} from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
    margin: '50px 10px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.mode === "light" ? theme.palette.primary.main : 'white',
}));