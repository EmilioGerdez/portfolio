import { Button, Menu, MenuItem, Box } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        handleClose();
    };

    return (
        <Box sx={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
            <Button
                id="language-button"
                aria-controls={open ? 'language-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                startIcon={<LanguageIcon />}
                sx={{
                    color: 'text.primary',
                    background: 'rgba(19, 47, 76, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                        background: 'rgba(0, 229, 255, 0.1)',
                        border: '1px solid #00e5ff',
                    },
                }}
            >
                {i18n.language === 'es' ? 'ES' : 'EN'}
            </Button>
            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'language-button',
                }}
                PaperProps={{
                    sx: {
                        background: '#0a1929',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'text.primary',
                    }
                }}
            >
                <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                <MenuItem onClick={() => changeLanguage('es')}>Español</MenuItem>
            </Menu>
        </Box>
    );
};

export default LanguageSelector;
