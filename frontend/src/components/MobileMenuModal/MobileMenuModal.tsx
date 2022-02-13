import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {Box, useTheme} from "@mui/material";
import {IMobileMenuModal} from "../../interfaces/interfaces";
import {StyledMobileNavItem} from "../Header/StyledHeader";
import {NavLink} from "react-router-dom";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function MobileMenuModal({closeModal, isModalOpen, navItems}: IMobileMenuModal): JSX.Element {

    const theme = useTheme()

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
                        sx={{margin: '50px 5px'}}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {navItems.map(navItem => (
                        <StyledMobileNavItem
                            key={navItem.attributes.name}
                            onClick={closeModal}
                        >
                            <NavLink to={navItem.attributes.route}
                                     style={({isActive}) =>
                                         isActive
                                             ? {
                                                 color: theme.palette.mode === 'light'
                                                     ? theme.palette.primary.main
                                                     : theme.palette.secondary.main,
                                             }
                                             : {}
                                     }
                            >
                                {navItem.attributes.name}
                            </NavLink>
                        </StyledMobileNavItem>
                    ))}
                </Box>


            </Dialog>
        </div>
    );
}