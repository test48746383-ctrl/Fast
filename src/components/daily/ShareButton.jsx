import React from 'react';
import Button from '../common/Button';
import { shareContent } from '../../utils/shareUtils';

const ShareButton = ({ title, text }) => {
  const handleShare = () => {
    shareContent(title, text);
  };

  return (
    <Button onClick={handleShare} variant="secondary" className="mt-4">
      Share Insight
    </Button>
  );
};

export default ShareButton;
