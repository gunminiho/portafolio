import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    resume: null,
    currentView: null,
    startMenu: false,
    startUp: false,
    showText: false,
    showWindow: false,
    showIE: false,
    language: "none",
    allProjects: false,
    project: null
};

const windowsBool = createSlice({
    name: "windows",
    initialState,
    reducers: {
        setResume: (state, action) => {
            state.resume = action.payload;
        },
        setCurrentView: (state, action) => {
            state.currentView = action.payload;
        },
        setStartMenu: (state, action) => {
            state.startMenu = action.payload;
        },
        setStartUp: (state, action) => {
            state.startUp = action.payload;
        },
        setShowText: (state, action) => {
            state.showText = action.payload;
        },
        setShowWindow: (state, action) => {
            state.showWindow = action.payload;
        },
        setShowIE: (state, action) => {
            state.showIE = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        setAllProjects: (state, action) => {
            state.allProjects = action.payload;
        },
        setProject: (state, action) => {
            state.project = action.payload;
        }
    }
});


export const { setResume, setCurrentView, setStartMenu, setStartUp, setShowText, setShowWindow, setShowIE, setLanguage, setAllProjects, setProject } = windowsBool.actions;
export default windowsBool.reducer;