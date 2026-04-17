import { createContext } from "react";

export const ThemeContext = createContext({
    timeline: [],
    setTimeline: () => { },
    user: [],
    setUser: () => { },
});