import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './form-component.scss';
import { useTranslation } from 'react-i18next';
import MuiPhoneNumber from 'material-ui-phone-number';

const countryOptions = [
  { value: 'IN', text: '🇮🇳', label: '🇮🇳 +91', isdCode: '+91' },
  { value: 'AE', text: '🇦🇪', label: '🇦🇪 +971', isdCode: '+971' }, // Dubai
  { value: 'SA', text: '🇸🇦', label: '🇸🇦 +966', isdCode: '+966' }, // Saudi Arabia
  { value: 'EG', text: '🇪🇬', label: '🇪🇬 +20', isdCode: '+20' }, // Egypt
  { value: 'KW', text: '🇰🇼', label: '🇰🇼 +965', isdCode: '+965' }, // Kuwait
  // Add more countries as needed
];

const FormComponent = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [isWhatsAppChecked, setIsWhatsAppChecked] = useState(true);
  const [data, setData] = useState({
    name: "", email: "", number: "", location: "",isd:''
  })

  const handleCountryChange = (event) => {
    const selected = countryOptions.find(option => option.value === event.target.value);
    setSelectedCountry(selected);
  };

  const handleWhatsAppChange = () => {
    setIsWhatsAppChecked(!isWhatsAppChecked);
  };

  let name, value

  const updateData = (e) => {
    name = e.target.name
    value = e.target.value
    data[name] = value
    setData(data)
  }
  const handleOnChange = (value) => {
    console.log('Full Phone Number:', value);

    // Extract the country code and phone number
    const match = value.match(/^(\+\d+)(.*)$/); // Regex to split country code and phone number
    if (match) {
      console.log(match);
      
      setData({
        ...data,
        isd:match[1],
        number:match[2].trim()
      })
    }
  };

  const handleModalFormSubmit = async (e) => {
    // e.preventDefault()
    // data["entertained"] = false
    // data["isd"] = selectedCountry.isdCode
    // data["pincode"] = ""
    // data["whatsapp"] = isWhatsAppChecked
    // data["origin"] = window.location.pathname
    // const collectionRef = collection(db, "consultation")
    // const response = await addDoc(collectionRef, data)
    // if (response != null) {
    //   // Do something here with response
    //   console.log(response)
    //   window.location.reload()
    // }
  }

  return (
    <form className="form">
      <h2>{t('GLOBAL_FORM_DATA.TALK_TO_A_DESIGNER')}</h2>
      <TextField
        name="name"
        placeholder={t('GLOBAL_FORM_DATA.PLACEHOLDER_NAME')}
        variant="standard" size="small"
        fullWidth
        InputProps={{
          classes: {
            input: 'custom-placeholder',
          },
        }}
        onChange={updateData}
      />
      {/* TODO Email regex validation to be done */}
      <TextField
        name="email"
        placeholder={t('GLOBAL_FORM_DATA.PLACEHOLDER_EMAIL')}
        variant="standard"
        size="small"
        fullWidth
        InputProps={{
          classes: {
            input: 'custom-placeholder',
          },
        }}
        onChange={updateData}
      />
      <div className="mobile-number-field">
        {/* <select
          className="country-select"
          value={selectedCountry.value}
          onChange={handleCountryChange}
        >
          {countryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}
        {/* <TextField
          name="number"
          placeholder={t('GLOBAL_FORM_DATA.PLACEHOLDER_PHONE')}
          variant="standard"
          fullWidth
          size="small"
          InputProps={{
            classes: {
              input: 'custom-placeholder',
            },
          }}
          onChange={updateData}
        /> */}
        <MuiPhoneNumber
          defaultCountry="ae"
          // regions={['asia']}
          onChange={handleOnChange}
        />

      </div>
      <div className="checkbox-label">
        <label className="toggle-switch">
          <input type="checkbox" checked={isWhatsAppChecked} onChange={handleWhatsAppChange} />
          <span className="slider"></span>
        </label>
        <span className='whatsapp-placeholder'>{t('GLOBAL_FORM_DATA.PLACEHOLDER_WHATSAPP')}</span>
      </div>
      <TextField
        name="location"
        placeholder={t('GLOBAL_FORM_DATA.PLACEHOLDER_CITY')}
        variant="standard"
        size="small"
        fullWidth
        InputProps={{
          classes: {
            input: 'custom-placeholder',
          },
        }}
        onChange={updateData}
      />
      <Button type="submit" variant="contained" className="submit-button" onClick={handleModalFormSubmit}>
        {t('GLOBAL_FORM_DATA.BOOK_A_FREE_DESIGN_SESSION')}
      </Button>
      {/* <div className="form-footer">
        {t('GLOBAL_FORM_DATA.FOOTER_DATA_1')} <a href="#">{t('GLOBAL_FORM_DATA.FOOTER_DATA_2')}</a> {t('GLOBAL_FORM_DATA.FOOTER_DATA_3')} <a href="#">{t('GLOBAL_FORM_DATA.FOOTER_DATA_4')}</a>.
      </div> */}
    </form>
  );
};

export default FormComponent;
