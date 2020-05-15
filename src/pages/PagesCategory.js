import React from 'react';
import MainHeader from '../components/main/MainHeader';
import MainCategoryBanner from '../components/category/main/MainCategoryBanner';
import MainCategoryContent from '../components/category/main/MainCategoryContent';
import MainFooter from '../components/main/MainFooter';

const PagesCategory = () => {
	return(
		<>
			<MainHeader />
			<MainCategoryBanner />
			<MainCategoryContent />
			<MainFooter />
		</>
	)
}

export default PagesCategory;