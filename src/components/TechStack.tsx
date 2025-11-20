import { Box, Typography, Chip, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import { cloneElement } from 'react';
import { useTranslation } from 'react-i18next';

const TechStack = () => {
    const { t } = useTranslation();

    const skills = [
        { category: t('techStack.frontend'), icon: <CodeIcon />, items: ['React', 'TypeScript', 'Next.js', 'Material UI', 'Tailwind CSS', 'Framer Motion'] },
        { category: t('techStack.backend'), icon: <StorageIcon />, items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'] },
        { category: t('techStack.devops'), icon: <CloudIcon />, items: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'] },
    ];

    return (
        <Box sx={{ py: 5 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 5 }}>
                {t('techStack.title')}
            </Typography>
            <Grid container spacing={4}>
                {skills.map((skillGroup) => (
                    <Grid size={{ xs: 12, md: 4 }} key={skillGroup.category}>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            {cloneElement(skillGroup.icon, { sx: { color: 'secondary.main' } })}
                            <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                {skillGroup.category}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {skillGroup.items.map((item) => (
                                <Chip
                                    key={item}
                                    label={item}
                                    sx={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        '&:hover': {
                                            background: 'rgba(0, 229, 255, 0.1)',
                                            borderColor: '#00e5ff',
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TechStack;
