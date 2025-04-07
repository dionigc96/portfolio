import { Box, TextField, Button } from '@mui/material';

const ContactForm = ({ dataAos }: { dataAos: any }) => {
    const CustomTextField = (props: any) => (
        <TextField
            {...props}
            variant="outlined"
            fullWidth
            required
            sx={{
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                        borderColor: 'var(--primary-color)', // Cambia el color del borde al enfocar
                    },
                    '&:hover fieldset': {
                        borderColor: 'var(--primary-color)', // Cambia el color del borde al pasar el mouse
                    },
                },
                '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                        color: 'var(--primary-color)', // Cambia el color del label al enfocar
                    },
                },
            }}
        />
    );

    return (
        <Box
            component="form"
            data-aos={dataAos}
            sx={{
                maxWidth: {
                    xs: '100%', // Pantallas extra pequeñas
                    sm: '60%',  // Pantallas pequeñas
                    md: 600,    // Pantallas medianas
                    lg: 700,    // Pantallas grandes
                },
                width: '100%', 
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                border: '3px solid',
                borderColor: 'var(--primary-color)',
                borderRadius: 2,
                padding: 2,
            }}
        >
            <CustomTextField label="Name" />
            <CustomTextField label="Email" type="email" />
            <CustomTextField label="Message" multiline rows={4} />
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
