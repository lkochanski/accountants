import React, {createContext, useContext, useMemo, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";


interface IColorModeContext {
    toggleColorMode: () => void;
    mode: "dark" | "light";
}

export const ColorModeContext = createContext<IColorModeContext>({
    toggleColorMode: () => {},
    mode: "light"
});


export const ColorModeContextProvider = ({children}: any) => {
    const [mode, setMode] = useState<"light" | "dark">("light");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
            mode,
        })
        ,[mode]
    );

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode,
                primary: {
                    main: "#3284FF",
                    light: "#82B4FF",
                    dark: "#003E78"
                },
                secondary: {
                    main: "#FC8F77"
                }
            }
        })
        ,[mode])

    return (
      <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
              {children}
          </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export const useColorMode = () => useContext(ColorModeContext);