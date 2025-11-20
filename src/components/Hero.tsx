import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at 50% 50%, #1a237e 0%, #0a1929 70%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Abstract Background Elements */}
            <Box
                component={motion.div}
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                sx={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #00e5ff33, transparent)',
                    filter: 'blur(80px)',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="lg" sx={{ zIndex: 1, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: '3rem', md: '5rem' },
                            background: 'linear-gradient(45deg, #fff 30%, #00e5ff 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 2,
                        }}
                    >
                        {t('hero.title')}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2.5rem' },
                            color: 'text.secondary',
                            fontWeight: 400,
                            mb: 4,
                        }}
                    >
                        {t('hero.subtitle')}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        href="#projects"
                        sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            background: 'linear-gradient(45deg, #00e5ff, #2979ff)',
                            boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #00b8d4, #2962ff)',
                                boxShadow: '0 0 30px rgba(0, 229, 255, 0.6)',
                            },
                        }}
                    >
                        {t('hero.cta')}
                    </Button>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Hero;
