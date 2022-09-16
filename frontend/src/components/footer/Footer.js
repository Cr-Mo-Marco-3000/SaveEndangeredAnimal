import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.nie.re.kr/endangered_species/home/main/main.do">
          멸종위기 야생생물 포털
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer() {
    return(
        <ThemeProvider>
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Footer 입니다. <br />
          무슨 내용을 넣어야 할까요..? ㅎㅎ..
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
    )
}