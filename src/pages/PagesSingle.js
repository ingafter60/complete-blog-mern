import React from 'react';
import MainSharedHeader from '../components/shared/main/MainSharedHeader';
import MainSingle from '../components/single/main/MainSingle';
import MainSharedFooter from '../components/shared/main/MainSharedFooter';
const PagesSingle = () => {
	return(
		<>
			<MainSharedHeader />
			<MainSingle />
			<MainSharedFooter />
		</>
	)
}

export default PagesSingle;