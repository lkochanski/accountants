import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {Box} from "@mui/material";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

interface IMobileMenuModal {
    closeModal: () => void,
    isModalOpen: boolean;
}

export default function MobileMenuModal({closeModal, isModalOpen}: IMobileMenuModal): JSX.Element {

    return (
        <div>
            <Dialog
                fullScreen
                open={isModalOpen}
                onClose={closeModal}
                TransitionComponent={Transition}
            >
                <Box>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={closeModal}
                        aria-label="close"
                        sx={{margin: '30px'}}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>


            </Dialog>
        </div>
    );
}