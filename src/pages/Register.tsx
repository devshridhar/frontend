import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, TextField, Button, Alert, Typography } from '@mui/material';
import { register } from '../api/auth'; // Your API function for registering
import { useNavigate } from 'react-router-dom';

// Validation schema
const schema = yup.object().shape({
    email: yup
        .string()
        .email("Please provide a valid email address")
        .required("Email is required"),
    name: yup
        .string()
        .min(3, "Name must be at least 3 characters long")
        .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
        .required("Name is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .matches(/[a-zA-Z]/, "Password must contain at least one letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
        .required("Password is required"),
});

const Register: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [successMessage, setSuccessMessage] = React.useState<string | null>(null);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        try {
            await register(data);
            setSuccessMessage('Registration successful! Redirecting to login...');
            setErrorMessage(null);
            setTimeout(() => navigate('/login'), 3000);
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || 'Registration failed');
            setSuccessMessage(null);
        }
    };

    return (
        <Box maxWidth={400} mx="auto" mt={5}>
            {successMessage && <Alert severity="success">{successMessage}</Alert>}
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Email"
                            fullWidth
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Name"
                            fullWidth
                            margin="normal"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                    )}
                />
                <Button type="submit" variant="contained" fullWidth>
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default Register;
