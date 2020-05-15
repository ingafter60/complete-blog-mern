import React from 'react';
import MainHeader from '../components/main/MainHeader';
import MainSlider from '../components/main/MainSlider';
import MainTrendingPosts from '../components/main/MainTrendingPosts';
import MainFreshStories from '../components/main/MainFreshStories';
import MainAd from '../components/main/MainAd';
import MainLatestArticles from '../components/main/MainLatestArticles';
import MainFooter from '../components/main/MainFooter';

const PagesHome = () => {
	return(
		<>
			<MainHeader />
			<MainSlider />
			<MainTrendingPosts />
			<MainFreshStories />
			<MainAd />
			<MainLatestArticles />
			<MainFooter />
		</>
	)
}

export default PagesHome;