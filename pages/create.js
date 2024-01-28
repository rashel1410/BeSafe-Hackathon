import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from '../styles/Create.module.css';
import { useState } from 'react';

const createImposter = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('man');
  const [socialNetwork, setSocialNetwork] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const imposter = {
      firstName,
      lastName,
      nickname,
      gender,
      socialNetwork,
      profileUrl,
      imageUrl,
      info,
    };

    console.log(imposter);
  };

  const handleSocialNetworkChange = (e, socialNetwork) => {
    setSocialNetwork(socialNetwork);
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>הוספת מתחזה</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles['row']}>
          <div className={styles.column}>
            {/* First name: */}
            <label className={styles.label}>שם משפחה:</label>
            <input
              className={styles.input}
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.column}>
            {/* Last name: */}
            <label className={styles.label}>שם פרטי:</label>
            <input
              className={styles.input}
              type='text'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        {/* Nickname: */}
        <label className={styles.label}>כינוי:</label>
        <input
          className={styles.input}
          type='text'
          required
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <div className={styles['row']}>
          <div className={styles.column}>
            {/* Source: */}
            <FormControl>
              <FormLabel id='socialmedia' className={styles.label}>
                מקור:
              </FormLabel>
              <RadioGroup
                className={styles.inline}
                aria-labelledby='socialmedia'
                name='socialmedia'
                value={socialNetwork}
                onChange={handleSocialNetworkChange}
              >
                <FormControlLabel
                  value='instagram'
                  control={<Radio className={styles.hiddenRadio} />}
                  label={
                    <InstagramIcon
                      className={`${styles.icon} ${
                        socialNetwork === 'instagram'
                          ? styles.instagramChecked
                          : styles.iconUnchecked
                      }`}
                    />
                  }
                />
                <FormControlLabel
                  value='facebook'
                  control={<Radio className={styles.hiddenRadio} />}
                  label={
                    <FacebookRoundedIcon
                      className={`${styles.icon} ${
                        socialNetwork === 'facebook'
                          ? styles.facebookChecked
                          : styles.iconUnchecked
                      }`}
                    />
                  }
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className={styles.column}>
            {/* Gender: */}
            <label className={styles.label}>מגדר:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={styles.social}
            >
              <option vale='man'>גבר</option>
              <option value='woman'>אישה</option>
              <option value='unknown'>לא ידוע</option>
            </select>
          </div>
        </div>

        {/* Profile URL: */}
        <label className={styles.label}>לינק לפרופיל:</label>
        <input
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
          className={styles.input}
          type='text'
          required
        />

        {/* Image URL: */}
        <label className={styles.label}>תמונה:</label>
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className={styles.input}
          type='text'
        />

        {/* Info: */}
        <label className={styles.label}>תיאור:</label>
        <textarea
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          className={styles.info}
          required
        ></textarea>

        <button className={styles.button}>הוספה</button>
      </form>
    </div>
  );
};

export default createImposter;
