import React from 'react';
import { ReviewsSection } from '../../../legacy/components/ContentSections';
import type { ReviewsBlockConfig } from '../../../data/services';
import type { PaperReview, Review, VideoReview } from '../../../legacy/types';

export default function LegacyReviewsSection({
  content,
  videoReviews,
  whatsappReviews,
  paperReviews,
}: {
  content: ReviewsBlockConfig;
  videoReviews: VideoReview[];
  whatsappReviews: Review[];
  paperReviews: PaperReview[];
}) {
  return (
    <ReviewsSection
      onShowAllReviews={() => {
        window.location.href = '/otzyvy-klientov/';
      }}
      content={content}
      videoReviews={videoReviews}
      whatsappReviews={whatsappReviews}
      paperReviews={paperReviews}
    />
  );
}
