import {ColorModeContext} from "../../contexts/ColorModeContext";
import {useContext, useState} from "react";
import {StyledColorSwitch} from "./StyledColorSwitch";

const snapSound1 = require('../../assets/audio/snap1.mp3');
const snapSound2 = require('../../assets/audio/snap2.mp3');

const ColorSwitch = () => {

    const snapOn = new Audio(snapSound1)
    const snapOff = new Audio(snapSound2)

    const {mode, toggleColorMode} = useContext(ColorModeContext);
    const [checked, setChecked] = useState(false);

    const handleColorSwitch = () => {
        toggleColorMode();
        mode === "light"
            ? snapOn.play()
            : snapOff.play();
        setChecked(!checked);
    }

    return (
        <StyledColorSwitch
         checked={checked}
         onChange={handleColorSwitch}
        />
    );
};

export default ColorSwitch;