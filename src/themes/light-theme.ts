import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
        ].join(','),
    },

    palette: {
        mode: 'light',
        background:{
            default:'#f5f6f6'
        },
        primary: {
            main: '#37b87f'
        },
        secondary: {
            main: '#3A64D8'
        },
        info: {
            main:'#fff',
            dark:'#242f51',
            light:'#f5f6f6'
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: 'relative',
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#232233',
                    color:'#f8f9f8',
                    padding:'1rem 0'
                },
            }
        },
        MuiListItemText:{
            styleOverrides:{
                root:{
                    color:'#f5f6f6'
                }
            }
        },

        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 700
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 600
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                }
            }
        },


        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'medium',
                disableElevation: true,
                color: 'primary',
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '5px',
                    color:'#f5f6f6',
                    gap:'.5rem',
                    ":hover": {
                        // backgroundColor: 'rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }
            }
        },

        MuiList:{
            defaultProps: { },
            styleOverrides: {
                root: {
                    display: 'flex',
                }
            }
        },

        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
                    borderRadius: '10px',
                }
            }
        }

    }
});