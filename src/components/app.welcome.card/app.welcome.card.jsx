import {Link, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import cookies from '../../assets/cookies-image.jpg';
const WelcomeCard = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				textAlign: 'center',
			}}
		>
			<Typography variant="h4"> Demo Application</Typography>
			<Typography variant="h6">Cookies to a react app</Typography>
			<Typography variant="body2">
				{' '}
				This is a tutorial on how to add{' '}
				<Link
					href="https://en.wikipedia.org/wiki/HTTP_cookie"
					target="_blank"
					rel="noopener"
				>
					cookies
				</Link>{' '}
				to your application
			</Typography>
			<img
				src={cookies}
				alt="cookies"
				width={'50%'}
			/>
		</Box>
	);
};

export default WelcomeCard;
