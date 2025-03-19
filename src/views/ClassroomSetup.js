import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ClassroomSetup = () => {
  const [classroomName, setClassroomName] = useState('');
  const [grade, setGrade] = useState('');
  const [csvFile, setCsvFile] = useState(null);
  const [manualStudent, setManualStudent] = useState({
    firstName: '',
    lastName: '',
    nickname: '',
    grade: '',
    developmentalConcerns: '',
    behavioralConcerns: '',
    notes: ''
  });
  
  const handleClassroomSubmit = (e) => {
    e.preventDefault();
    console.log("New classroom:", { classroomName, grade });
    // In a real app, submit this data to the Flask API.
  };

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
    console.log("CSV File selected:", file);
    // Basic CSV parsing can be added here.
  };

  const handleManualStudentChange = (e) => {
    const { name, value } = e.target;
    setManualStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleAddManualStudent = (e) => {
    e.preventDefault();
    console.log("Adding student:", manualStudent);
    // Reset the form after adding.
    setManualStudent({
      firstName: '',
      lastName: '',
      nickname: '',
      grade: '',
      developmentalConcerns: '',
      behavioralConcerns: '',
      notes: ''
    });
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Classroom Setup</Typography>
        <form onSubmit={handleClassroomSubmit}>
          <TextField 
            label="Classroom Name/Identifier" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={classroomName}
            onChange={(e) => setClassroomName(e.target.value)}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Grade</InputLabel>
            <Select
              value={grade}
              label="Grade"
              onChange={(e) => setGrade(e.target.value)}
            >
              <MenuItem value="Junior Kindergarten">Junior Kindergarten</MenuItem>
              <MenuItem value="Kindergarten">Kindergarten</MenuItem>
              {/* Add more grades as needed */}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Create Classroom
          </Button>
        </form>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Add Students</Typography>
          <Box sx={{ mt: 2 }}>
            <input type="file" accept=".csv" onChange={handleCSVUpload} />
          </Box>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>Or add manually:</Typography>
          <form onSubmit={handleAddManualStudent}>
            <TextField 
              label="First Name" 
              name="firstName" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={manualStudent.firstName}
              onChange={handleManualStudentChange}
            />
            <TextField 
              label="Last Name" 
              name="lastName" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={manualStudent.lastName}
              onChange={handleManualStudentChange}
            />
            <TextField 
              label="Nickname (optional)" 
              name="nickname" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={manualStudent.nickname}
              onChange={handleManualStudentChange}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Grade</InputLabel>
              <Select
                name="grade"
                value={manualStudent.grade}
                label="Grade"
                onChange={handleManualStudentChange}
              >
                <MenuItem value="Junior Kindergarten">Junior Kindergarten</MenuItem>
                <MenuItem value="Kindergarten">Kindergarten</MenuItem>
                {/* More options as needed */}
              </Select>
            </FormControl>
            <TextField 
              label="Developmental Concerns" 
              name="developmentalConcerns" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={manualStudent.developmentalConcerns}
              onChange={handleManualStudentChange}
            />
            <TextField 
              label="Behavioral Concerns" 
              name="behavioralConcerns" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              value={manualStudent.behavioralConcerns}
              onChange={handleManualStudentChange}
            />
            <TextField 
              label="Additional Notes" 
              name="notes" 
              variant="outlined" 
              fullWidth 
              margin="normal" 
              multiline
              rows={3}
              value={manualStudent.notes}
              onChange={handleManualStudentChange}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Add Student
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ClassroomSetup;
