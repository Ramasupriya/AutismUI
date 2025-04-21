import React, { useState } from "react";
import {
  TextField,
  Box,
  Grid,
  Button,
  MenuItem,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });

  const roles = ["Patient", "Doctor"];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error for the current field
  };

  // Handle form submission
  const handleSubmit = () => {
    const newErrors = {};
    // Validation
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.role) newErrors.role = "Please select a role";

    setErrors(newErrors);

    // If no errors, navigate or submit form
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
      // Perform API call or navigation here
      navigate("/homePage");
    }
  };

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url("https://st4.depositphotos.com/3441621/28233/i/450/depositphotos_282336788-stock-photo-smiling-medical-doctor-woman-with.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper elevation={5} sx={{ padding: 4, borderRadius: 2, maxWidth: 500 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Signup
        </Typography>

        {/* Form Fields */}
        <Box component="form" noValidate autoComplete="off">
          {/* Name Field */}
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />

          {/* Email Field */}
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          {/* Password Field */}
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          {/* Phone Number Field */}
          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.phone}
            onChange={handleChange}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
          />

          {/* Role Dropdown */}
          <TextField
            select
            label="Role"
            name="role"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.role}
            onChange={handleChange}
            error={Boolean(errors.role)}
            helperText={errors.role || "Select your role"}
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </TextField>

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            Signup
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SignupPage;
