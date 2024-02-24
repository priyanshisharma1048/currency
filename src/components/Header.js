import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Dropdown } from 'react-bootstrap';
import searchIcon from '../images/search-normal.svg';
import languageIcon from '../images/language-icon.svg';
import { useTranslation } from "react-i18next";


export default function Header() {
  const defaultLanguage = 'English'; // Set the default language here
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const { i18n, t } = useTranslation();


  useEffect(() => {
    // Retrieve selected language from localStorage on component mount
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    } else {
      // If no language is stored, set the default language
      setSelectedLanguage(defaultLanguage);
      // Store default language in localStorage
      localStorage.setItem('selectedLanguage', defaultLanguage);
    }
  }, [defaultLanguage]);

  useEffect(() => {
    // Set the language on the document root element
    document.documentElement.lang = selectedLanguage;
    // Store selected language in localStorage
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  const changeLanguage = (language) => {
    let lang_code="en";
    if(language==="English"){
      lang_code= "en"
      }
      else{
      lang_code="fr"
      }
    i18n.changeLanguage(lang_code);
    setSelectedLanguage(language);
  };

  return (
    <header className="header" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <Navbar expand="lg">
          <Navbar.Brand href="#"> {t("logo")}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="active" style={{ color: 'white' }}>
              {t("read")}
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'white' }}>
              {t("contactus")}
              </Nav.Link>
              <Nav.Link href="#" style={{ color: 'white' }}>
              {t("about")}
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <span className="search">
                <img src={searchIcon} alt="" />
              </span>
              <FormControl type="search" placeholder={t("searchPlaceholder")} className="search-bar me-2" aria-label="Search" />
              <span className="language">
                <img src={languageIcon} alt="" />
              </span>
              <span className="language-title"> {t("language")}</span>
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="languageDropdown" style={{ color: 'white' }}>
                  {selectedLanguage}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => changeLanguage('English')}>English</Dropdown.Item>
                  <Dropdown.Item onClick={() => changeLanguage('French')}>French</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
