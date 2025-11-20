import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: t('projects.p1.title'),
            description: t('projects.p1.desc'),
            tags: ['Go', 'gRPC', 'PostgreSQL'],
            github: '#',
            demo: '#',
        },
        {
            title: t('projects.p2.title'),
            description: t('projects.p2.desc'),
            tags: ['NestJS', 'React', 'Docker'],
            github: '#',
            demo: '#',
        },
        {
            title: t('projects.p3.title'),
            description: t('projects.p3.desc'),
            tags: ['Python', 'FastAPI', 'WebSockets'],
            github: '#',
            demo: '#',
        },
    ];

    return (
        <Box id="projects" sx={{ py: 10 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 5 }}>
                {t('projects.title')}
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: 'rgba(19, 47, 76, 0.4)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 4,
                                    overflow: 'visible',
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, color: '#fff' }}>
                                        {project.title}
                                    </Typography>
                                    <Box sx={{ mb: 2 }}>
                                        {project.tags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{ mr: 1, mb: 1, background: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff', border: '1px solid rgba(0, 229, 255, 0.2)' }}
                                            />
                                        ))}
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ p: 2, pt: 0 }}>
                                    <Button size="small" startIcon={<GitHubIcon />} sx={{ color: 'text.secondary' }}>
                                        {t('projects.code')}
                                    </Button>
                                    <Button size="small" startIcon={<LaunchIcon />} sx={{ color: 'primary.main' }}>
                                        {t('projects.demo')}
                                    </Button>
                                </CardActions>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
