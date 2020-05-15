import React from 'react';
import MainHeader from '../components/home/main/MainHeader';
import MainSlider from '../components/home/main/MainSlider';
import MainTrendingPosts from '../components/home/main/MainTrendingPosts';
import MainFreshStories from '../components/home/main/MainFreshStories';
import MainAd from '../components/home/main/MainAd';
import MainLatestArticles from '../components/main/MainLatestArticles';
import MainFooter from '../components/home/main/MainFooter';

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