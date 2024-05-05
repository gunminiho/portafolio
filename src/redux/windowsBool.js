import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    resume: null,
    showFolder: false,
    startMenu: false,
    startUp: false,
    showText: false,
    showWindow: false,
    showIE: false,
    language: "none",
    allProjects: false,
    project: null,
    url : null,
    showResources: false,
    showInfo: false,
    file: null,
    tutorial: false,
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
        },
        setShowFolder: (state, action) => {
            state.showFolder = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        },
        setShowResources: (state, action) => {
            state.showResources = action.payload;
        },
        setShowInfo: (state, action) => {
            state.showInfo = action.payload;
        },
        setFile: (state, action) => {
            state.file = action.payload;
        },
        setTutorial : (state, action) => {
            state.tutorial = action.payload;
        },


    }
});


export const { setResume, setCurrentView, setStartMenu, setStartUp, setShowText, setShowWindow, setShowIE, setLanguage, setAllProjects, setProject, setShowFolder,setUrl, setShowResources, setShowInfo, setFile, setTutorial } = windowsBool.actions;
export default windowsBool.reducer;