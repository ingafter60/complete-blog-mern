import React from 'react';
import MainHeader from '../components/home/main/MainHeader';
import MainCategoryBanner from '../components/category/main/MainCategoryBanner';
import MainCategoryContent from '../components/category/main/MainCategoryContent';
import MainFooter from '../components/home/main/MainFooter';

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