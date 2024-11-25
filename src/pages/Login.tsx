import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, TextField, Button, Alert, Typography, Link } from '@mui/material';
import { login } from '../api/auth'; // Your API function for logging in
import { useNavigate } from 'react-router-dom';

// Validation schema
const schema = yup.object().shape({
    email: yup
        .string()
        .email("Please provide a valid email address")
        .required("Email is required"),
    password: yup.string().required("Password is required"),
});

const Login: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        try {
            await login(data);
            setErrorMessage(null);
            navigate('/welcome');
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <Box maxWidth={400} mx="auto" mt={5}>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <Typography variant="h4" gutterBottom>
                Login
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
                    Login
                </Button>
            </form>
            <Box mt={2} textAlign="center">
                <Typography variant="body2">
                    Don't have an account?{' '}
                    <Link href="/register" underline="hover">
                        Create Account
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Login;
