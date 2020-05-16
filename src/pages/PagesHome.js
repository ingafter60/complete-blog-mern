import React from 'react';
import MainSharedHeader from '../components/shared/main/MainSharedHeader';
import MainSlider from '../components/home/main/MainSlider';
import MainTrendingPosts from '../components/home/main/MainTrendingPosts';
import MainFreshStories from '../components/home/main/MainFreshStories';
import MainAd from '../components/home/main/MainAd';
import MainLatestArticles from '../components/home/main/MainLatestArticles';
import MainSharedFooter from '../components/shared/main/MainSharedFooter';

const PagesHome = () => {
	return(
		<>
			<MainSharedHeader />
			<MainSlider />
			<MainTrendingPosts />
			<MainFreshStories />
			<MainAd />
			<MainLatestArticles />
			<MainSharedFooter />
		</>
	)
}

export default PagesHome;