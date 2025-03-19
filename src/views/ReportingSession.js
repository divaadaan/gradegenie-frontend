import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress, Container, Typography } from '@mui/material';

const curriculumItems = [
  { id: 'academic', label: 'Academic Achievement' },
  { id: 'behavior', label: 'Behavior and Social' },
  { id: 'effort', label: 'Effort and Engagement' },
];

const preFabResponses = [
  { value: 'satisfactory', label: 'The student is progressing satisfactorily in this metric' },
  { value: 'insufficient', label: "The student's progress on this metric is insufficient" },
];

const insufficientFollowUp = [
  { value: 'behavioral', label: 'Due to behavioral issues' },
  { value: 'engagement', label: 'Due to lack of engagement with the subject matter' },
  { value: 'other', label: 'Other' },
];

const ReportingSession = () => {
  const [responses, setResponses] = useState({});
  const [followUps, setFollowUps] = useState({});
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  
  const currentItem = curriculumItems[currentItemIndex];

  const handleResponseChange = (event) => {
    const value = event.target.value;
    setResponses({ ...responses, [currentItem.id]: value });
    if (value !== 'insufficient') {
      setFollowUps({ ...followUps, [currentItem.id]: '' });
    }
  };

  const handleFollowUpChange = (event) => {
    const value = event.target.value;
    setFollowUps({ ...followUps, [currentItem.id]: value });
  };

  const handleNext = () => {
    if (responses[currentItem.id] === 'insufficient' && !followUps[currentItem.id]) {
      alert('Please select a follow-up reason.');
      return;
    }
    if (currentItemIndex < curriculumItems.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
    } else {
      setConfirmationOpen(true);
    }
  };

  const handleConfirm = () => {
    setConfirmationOpen(false);
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      alert('Report card comments saved successfully!');
      // Reset form after submission or navigate away
      setCurrentItemIndex(0);
      setResponses({});
      setFollowUps({});
    }, 2000);
  };

  return (
    <Container>
      <Box sx={{ mt: 4, maxWidth: 600, margin: 'auto' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Reporting Session: {currentItem.label}
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Response</InputLabel>
          <Select
            value={responses[currentItem.id] || ''}
            label="Response"
            onChange={handleResponseChange}
          >
            {preFabResponses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {responses[currentItem.id] === 'insufficient' && (
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Follow-up</InputLabel>
            <Select
              value={followUps[currentItem.id] || ''}
              label="Follow-up"
              onChange={handleFollowUpChange}
            >
              {insufficientFollowUp.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <TextField
          fullWidth
          label="Additional Comments"
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleNext}>
          {currentItemIndex < curriculumItems.length - 1 ? 'Next' : 'Submit'}
        </Button>
        {loading && <CircularProgress sx={{ ml: 2 }} />}
        <Dialog open={confirmationOpen} onClose={() => setConfirmationOpen(false)}>
          <DialogTitle>Confirm Submission</DialogTitle>
          <DialogContent>
            Are you sure you want to submit this Reporting Session?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmationOpen(false)}>Cancel</Button>
            <Button onClick={handleConfirm} variant="contained">Confirm</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default ReportingSession;
