import React from 'react';
import { Modal, Box, Typography, IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import descriptions from './Charts/ChartInfo';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '90vw',
  bgcolor: '#f7f7f7',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  p: 4,
};

const closeButtonStyle = {
  position: 'absolute',
  top: 10,
  right: 10,
  color: '#4a4a4a',
};

const titleContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 2,
};

const titleStyle = {
  color: '#333',
  fontSize: '1.5rem', // Adjust font size for a more professional look
  fontWeight: 'bold', // Add bold styling for emphasis
};

const descriptionButtonStyle = {
  position: 'absolute',
  bottom: 10,
  right: 10,
  color: '#4a4a4a',
};

const ModalB = ({ isOpen, onClose, chartData ,chartIndex}) => {
  const description = descriptions[chartIndex];

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <IconButton sx={closeButtonStyle} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Box sx={titleContainerStyle}>
          <Typography variant="h5" gutterBottom sx={titleStyle}>
            Detailed View of Chart
          </Typography>
          <Tooltip title={description} arrow placement="right">
            <IconButton sx={descriptionButtonStyle}>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <RechartsTooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#ff6e6e" strokeWidth={5} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Modal>
  );
};

export default ModalB;
