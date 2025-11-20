import { Box, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <Box id="about" sx={{ py: 10 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                {t('about.title')}
            </Typography>
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    background: 'rgba(19, 47, 76, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                }}
            >
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                    {t('about.p1')}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                    {t('about.p2')}
                </Typography>
            </Paper>
        </Box>
    );
};

export default About;
