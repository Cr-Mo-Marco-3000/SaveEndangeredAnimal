import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const APPBAR_MOBILE = 64;
    const APPBAR_DESKTOP = 92;

    const RootStyle = styled(AppBar)(({ theme }) => ({
        boxShadow: 'none',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        backgroundColor: alpha(theme.palette.background.default, 0.72)
      }));
    
      const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
        minHeight: APPBAR_MOBILE,
        [theme.breakpoints.up('lg')]: {
          minHeight: APPBAR_DESKTOP,
          padding: theme.spacing(0, 5)
        }
      }));

    return (
        <RootStyle>
            <ToolbarStyle>
                <Box>logo</Box>
                <Box sx={{flexGrow: 1}} />
                <Link to="/express">
                  <Button>나 표현하기</Button>
                </Link>
                <Link to="/animalList">
                  <Button>기금 목록</Button>
                </Link>
                <Link to="/mypage">
                  <Button>마이페이지</Button>
                </Link>
            </ToolbarStyle>
        </RootStyle>
    )
};

export default Navbar;