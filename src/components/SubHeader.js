import React from 'react';
import user from '../images/user.svg';
import { useTranslation } from 'react-i18next';

export default function SubHeader() {
  const { t } = useTranslation();

  return (
    <>
      <div className="sub-header">
        <div className="container d-flex p-0">
          <div className="col-md-6 d-flex">
            <select className="select-field form-select" aria-label="Default select example">
              <option selected>{t("casetype")}</option>
              <option value="1">{t("one")}</option>
              <option value="2">{t("two")}</option>
              <option value="3">{t("three")}</option>
            </select>
            <select className="select-field form-select" aria-label="Default select example">
              <option selected>{t("country")}</option>
              <option value="1">{t("one")}</option>
              <option value="2">{t("two")}</option>
              <option value="3">{t("three")}</option>
            </select>
            <select className="select-field form-select" aria-label="Default select example">
              <option selected>{t("findLawyer")}</option>
              <option value="1">{t("one")}</option>
              <option value="2">{t("two")}</option>
              <option value="3">{t("three")}</option>
            </select>
            <select className="select-field form-select" aria-label="Default select example">
              <option selected>{t("others")}</option>
              <option value="1">{t("one")}</option>
              <option value="2">{t("two")}</option>
              <option value="3">{t("three")}</option>
            </select>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div>
              <span className="pe-3"><img src={user} alt="user" /></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
