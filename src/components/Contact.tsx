import { Box, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <Box id="contact" sx={{ py: 10, mb: 5 }}>
            <Grid container spacing={6}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {t('contact.title')}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary', mb: 4 }}>
                        {t('contact.desc')}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton
                            size="large"
                            sx={{
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'primary.main',
                                '&:hover': { background: 'rgba(0, 229, 255, 0.1)' },
                            }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            sx={{
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'primary.main',
                                '&:hover': { background: 'rgba(0, 229, 255, 0.1)' },
                            }}
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            sx={{
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'primary.main',
                                '&:hover': { background: 'rgba(0, 229, 255, 0.1)' },
                            }}
                        >
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box component="form" noValidate autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField fullWidth label={t('contact.name')} variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField fullWidth label={t('contact.email')} variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField fullWidth label={t('contact.message')} multiline rows={4} variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    endIcon={<SendIcon />}
                                    fullWidth
                                    sx={{
                                        py: 1.5,
                                        background: 'linear-gradient(45deg, #00e5ff, #2979ff)',
                                        fontWeight: 600,
                                    }}
                                >
                                    {t('contact.send')}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;
