import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import './form-component.scss';
import { useTranslation } from 'react-i18next';
import MuiPhoneNumber from 'material-ui-phone-number';
import emailjs from '@emailjs/browser';

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
  const [isLoading, setIsLoading] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [data, setData] = useState({
    name: "", email: "", number: "", location: "",isd:''
  })

  useEffect(() => {
    emailjs.init('n8BOqYzAfEps7Lw3D');
  }, []);

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
    setPhoneValue(value);

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
    e.preventDefault();
    setIsLoading(true);
    
    const templateParams = {
      name: data.name,
      email: data.email,
      number: data.isd + data.number,
      location: data.location,
      whatsapp: isWhatsAppChecked ? 'Yes' : 'No'
    };

    try {
      const result = await emailjs.send('service_momf11c', 'template_p3k8pkh', templateParams);
      console.log('Email sent successfully:', result);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    } finally {
      setIsLoading(false);
      // Reset form after submission
      setData({
        name: "", email: "", number: "", location: "", isd: ''
      });
      setIsWhatsAppChecked(true);
      setPhoneValue('');
    }
  }

  return (
    <form className="form" onSubmit={handleModalFormSubmit}>
      <h2>{t('GLOBAL_FORM_DATA.TALK_TO_A_DESIGNER')}</h2>
      <TextField
        name="name"
        placeholder={t('GLOBAL_FORM_DATA.PLACEHOLDER_NAME')}
        variant="standard" size="small"
        fullWidth
        disabled={isLoading}
        required
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
        disabled={isLoading}
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
          value={phoneValue}
          disabled={isLoading}
          // regions={['asia']}
          onChange={handleOnChange}
        />

      </div>
      <div className="checkbox-label">
        <label className="toggle-switch">
          <input type="checkbox" checked={isWhatsAppChecked} onChange={handleWhatsAppChange} disabled={isLoading} />
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
        disabled={isLoading}
        InputProps={{
          classes: {
            input: 'custom-placeholder',
          },
        }}
        onChange={updateData}
      />
      <Button type="submit" variant="contained" className="submit-button" disabled={isLoading}>
        {isLoading ? 'Submitting...' : t('GLOBAL_FORM_DATA.BOOK_A_FREE_DESIGN_SESSION')}
      </Button>
      {/* <div className="form-footer">
        {t('GLOBAL_FORM_DATA.FOOTER_DATA_1')} <a href="#">{t('GLOBAL_FORM_DATA.FOOTER_DATA_2')}</a> {t('GLOBAL_FORM_DATA.FOOTER_DATA_3')} <a href="#">{t('GLOBAL_FORM_DATA.FOOTER_DATA_4')}</a>.
      </div> */}
    </form>
  );
};

export default FormComponent;
