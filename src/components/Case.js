import React from 'react';
import { withTranslation } from 'react-i18next';

function Case({ t }) {
  return (
    <>
      <div className="container justice-heading">
        {t('home')} &gt; {t('justiceHistory')}
      </div>

      <div className="container mb-5">
        <div className="case-page text-center">
          <h1 className="case-page-title">{t('casePageTitle')}</h1>
          <div className="case-page-description">
            {t('casePageDescription')}
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation()(Case);
