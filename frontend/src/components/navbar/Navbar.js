import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Toolbar } from '@mui/material';
import { Link,  useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    return (
        <RootStyle>
            <ToolbarStyle>
                <Button onClick={()=>navigate("/main")}>SEA</Button>
                <Box sx={{flexGrow: 1}} />
                <Button onClick={()=>navigate("/main/express")}>나 표현하기</Button>
                <Button onClick={()=>navigate("/main/animalList")}>기금 목록</Button>
                <Button onClick={()=>navigate("/main/mypage")}>마이페이지</Button>
            </ToolbarStyle>
        </RootStyle>
    )
};

export default Navbar;