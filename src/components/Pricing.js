import React from "react";
import tickIcon from "../images/tick.svg";
import crossIcon from "../images/cross.svg";
import { withTranslation } from "react-i18next";

function pricing({ t }) {
  return (
    <>
      <div className="container">
        <div className="recomended-price-section">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 recomended-title">
              <div className="card">
                <div className="card-body">{t("recommed")}</div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="price-section mb-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body">
                  <div className="card-title">{t("basic")}</div>
                  <div className="d-flex">
                    <div className="dollar-price">$5</div>
                    <div className="month">/{t("month")}</div>
                  </div>
                  <p className="plan-description mb-3">
                    {t(
                      "A budget-friendly option for individuals and small businesses"
                    )}
                  </p>
                  <button className="get-started form-control mt-4 mb-4">
                    {t("Get Started")}
                  </button>
                  <p className="features-title"> {t("Feautures")}</p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    10 GB storage
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("basicFileCollaboration")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("Mobile app access")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("File synchronization across devices")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("Support for common file types")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={crossIcon} alt="cross" />
                    </span>
                    {t("Automatic file backup")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={crossIcon} alt="cross" />
                    </span>
                    {t("Advanced security features")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body">
                  <div className="card-title">{t("Professional")}</div>
                  <div className="d-flex">
                    <div className="dollar-price">$15</div>
                    <div className="month">/ {t("month")}</div>
                  </div>
                  <p className="plan-description mb-3">
                    {t(
                      "A comprehensive option for businesses with more advanced needs."
                    )}
                  </p>
                  <button className="get-started form-control mt-4 mb-4">
                    {t("Get Started")}
                  </button>
                  <p className="features-title">{t("Feautures")}</p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("100 GB storage")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("Advanced file collaboration")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("Mobile app access")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("File synchronization across devices")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("Support for common file types")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("Automatic file backup")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("Advanced security features")}
                  </p>
                  <p className="features">
                    <span>
                      <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
                    </span>
                    {t("Purchase additional features")}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <div className="card-body">
                 
                </div>
              </div><div className="card-title">{t("Enterprise")}</div>
<div className="d-flex">
  <div className="dollar-price">{t("Custom")}</div>
  <div className="month"></div>
</div>
<p className="plan-description mb-3">
  {t("A customizable plan for large organizations with specific needs.")}
</p>
<button className="get-started form-control mt-4 mb-4">
  {t("Get Started")}
</button>
<p className="features-title">{t("Feautures")}</p>
<p className="features">
  <span>
    <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
  </span>
  {t("Customizable storage capacity")}
</p>
<p className="features">
  <span>
    <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
  </span>
  {t("Advanced file collaboration")}
</p>
<p className="features">
  <span>
    <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
  </span>
  {t("Mobile app access")}
</p>
<p className="features">
  <span>
    <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
  </span>
  {t("File synchronization across devices")}
</p>
<p className="features">
  <span>
    <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
  </span>
  {t("Support for common file types")}
</p>
<p className="features">
  <span>
    <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
  </span>
  {t("Automatic file backup")}
</p>
<p className="features">
  <span>
    <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
  </span>
  {t("Advanced security features")}
</p>
<p className="features">
  <span>
    <img className="pe-2 pb-1" src={tickIcon} alt="tick" />
  </span>
  {t("Purchase additional features")}
</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withTranslation()(pricing);
