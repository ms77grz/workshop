import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function DisplayBox({ children, breakpoint }) {
  const display = {
    xs: 'none',
    sm: 'none',
    md: 'none',
    lg: 'none',
    xl: 'none',
  };
  display[breakpoint] = 'block';
  return <Box display={display}>{children}</Box>;
}

export default function TestBreakpoints() {
  const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
  return (
    <ThemeProvider theme={theme}>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='100vw'
        height='100vh'
        fontSize={64}
      >
        <Box>
          {breakpoints.map(breakpoint => (
            <DisplayBox breakpoint={breakpoint}>{breakpoint}</DisplayBox>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
