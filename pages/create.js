import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from '../styles/Create.module.css';
import { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';

const CreateImposterDialog = ({ open, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('man');
  const [source, setSource] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [info, setInfo] = useState('');

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const imposter = {
      firstName,
      lastName,
      nickname,
      gender,
      source,
      profile_url: profileUrl,
      image_url: imageUrl,
      info,
      comments: [],
      timestamp: new Date().toISOString().split('T')[0],
    };

    console.log(imposter);

    fetch('http://localhost:8000/imposters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(imposter),
    }).then(() => {
      console.log('a new imposter added:' + imposter.nickname);
    });
  };

  return (
    <Dialog
      dir='rtl'
      onClose={handleClose}
      open={open}
      fullWidth={true}
      maxWidth={'sm'}
      scroll={'paper'}
    >
      <DialogTitle>הוספת מתחזה</DialogTitle>
      <div className={styles.container}>
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
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                >
                  <FormControlLabel
                    value='instagram'
                    control={<Radio className={styles.hiddenRadio} />}
                    label={
                      <InstagramIcon
                        className={`${styles.icon} ${
                          source === 'instagram'
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
                          source === 'facebook'
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
    </Dialog>
  );
};

export default CreateImposterDialog;
