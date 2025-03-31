import { Box, TextField, Button } from '@mui/material';

const ContactForm = () => {
    return (
        <Box
            component="form"
            sx={{
                maxWidth: 600,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                border: '1px solid',
                borderColor: 'grey.300',
                borderRadius: 2,
                padding: 2,
            }}
        >
            <TextField label="Name" variant="outlined" fullWidth required />
            <TextField label="Email" type="email" variant="outlined" fullWidth required />
            <TextField
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
            />
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'var(--primary-color)',
                    '&:hover': {
                        backgroundColor: 'var(--grey-parraf)',
                    },
                }}
                type="submit"
            >
                Send Message
            </Button>
        </Box>
    );
};

export default ContactForm;
