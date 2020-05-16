import React from 'react';
import MainSharedHeader from '../components/shared/main/MainSharedHeader';
import MainCategoryBanner from '../components/category/main/MainCategoryBanner';
import MainCategoryContent from '../components/category/main/MainCategoryContent';
import MainSharedFooter from '../components/shared/main/MainSharedFooter';

const PagesCategory = () => {
	return(
		<>
			<MainSharedHeader />
			<MainCategoryBanner />
			<MainCategoryContent />
			<MainSharedFooter />
		</>
	)
}

export default PagesCategory;