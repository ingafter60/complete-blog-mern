import React from 'react';
import MainSharedHeader from '../components/shared/main/MainSharedHeader';
import Main404 from '../components/404/main/Main404';
import MainSharedFooter from '../components/shared/main/MainSharedFooter';

const Pages404 = () => {
	return(
		<>
			<MainSharedHeader />
			<Main404 />
			<MainSharedFooter />
		</>
	)
}

export default Pages404;