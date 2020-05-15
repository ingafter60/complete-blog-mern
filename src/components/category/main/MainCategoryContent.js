import React from 'react';
import SubCategoryContent1 from '../sub/SubCategoryContent1';
import SubCategoryContent2 from '../sub/SubCategoryContent2';
import SubCategoryAd from '../sub/SubCategoryAd';
import SubCategoryPagination from '../sub/SubCategoryPagination';
import SubCategorySide from '../sub/SubCategorySide';

const MainCategoryContent = () => {
	return(
		<section className="blog-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="blog-box list-style">

							<SubCategoryContent1 />

							<SubCategoryContent2 />

							<SubCategoryAd />

							<SubCategoryPagination />

						</div>
					</div>
					<SubCategorySide />
				</div>
			</div>
		</section>
	)
}

export default MainCategoryContent;