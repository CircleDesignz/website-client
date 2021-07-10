import { Heading } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/admin/shared/navbar/navbar';
import { withAuth } from '../../components/auth/auth';

const Dashboard = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Dashboard;
