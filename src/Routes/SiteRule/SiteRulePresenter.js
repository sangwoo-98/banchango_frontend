import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const SiteRulePresenter = () => {
  return (
    <>
      <Navbar />
      <embed
        src="https://warehouse-documents-bucket.s3.ap-northeast-2.amazonaws.com/Service-Agreements.pdf"
        type="application/pdf"
        scrolling="auto"
        frameBorder="0"
        height="100%"
        width="100%"
        style={{ position: 'absolute', left: 0, top: 0 }}
      />
    </>
  );
};

export default SiteRulePresenter;