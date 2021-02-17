import React from 'react';
// Styles
import { Wrapper } from '../scroll/User.styles';

const User = ({ user }) => <Wrapper>{user.email}</Wrapper>;

export default User;