import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useGlobalContext } from '../../public/context';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Male';
import PersonIcon from '@mui/icons-material/Person';
import styles from '/styles/ImposterId.module.css';

import Card from '../../comps/Card.js';

const ProfileDisplay = () => {
  const router = useRouter();
  const { imposterId } = router.query;
  const { imposters, isPending } = useGlobalContext();
  const [comment, setComment] = useState('');
  const [imposterToDisplay, setImposterToDisplay] = useState(null);

  useEffect(() => {
    // Ensure imposters is not null before using find
    if (imposters) {
      // Find the imposter with the matching id
      const foundImposter = imposters.find(
        (imposter) => imposter.id === imposterId
      );

      if (foundImposter) {
        setImposterToDisplay(foundImposter);
        console.log(foundImposter.first_name); // Log here, within the useEffect
      }
    }
  }, [imposterId, imposters]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      const comments = [comment, ...(imposterToDisplay.comments || [])];
      const response = await fetch(
        `http://localhost:8000/imposters/${imposterId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ comments }),
        }
      );

      console.log(comment);
      console.log(imposterId);

      if (response.ok) {
        setImposterToDisplay({
          ...imposterToDisplay,
          comments,
        });

        setComment(''); // Clear the comment input field
      } else {
        console.error('Failed to add comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {imposterToDisplay && (
        <center>
          <Head>
            <title>
              Shazar | {imposterToDisplay.first_name}{' '}
              {imposterToDisplay.last_name}
            </title>
            <meta name='keywords' content='ninjas' />
          </Head>
          <Box>
            <h1>
              {imposterToDisplay.first_name} {imposterToDisplay.last_name}
            </h1>
            <p>{imposterToDisplay.nick_name} </p>
            <img
              style={{
                borderRadius: '25px',
                height: '200px',
                marginBottom: '10px',
              }}
              src={imposterToDisplay.img_url}
            />
            <br />
            <div className={styles.icons}>
              <div>
                {imposterToDisplay.gender === 'male' ? (
                  <MaleIcon />
                ) : (
                  <FemaleIcon />
                )}
              </div>
              <div>
                {imposterToDisplay.source === 'instagram' ? (
                  <a
                    href={imposterToDisplay.profile_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg'
                      alt='Instagram Logo'
                      width={30}
                      height={30}
                    />
                  </a>
                ) : null}

                {imposterToDisplay.source === 'facebook' ? (
                  <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Image
                      src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
                      alt='Facebook Logo'
                      width={30}
                      height={30}
                    />
                  </a>
                ) : null}
              </div>
            </div>
            <br />
            <label>דיווח:</label>
            <div style={{ width: '450px' }}>
              <Card
                className={styles.card2}
                content={imposterToDisplay.info}
                readOnly
              ></Card>
            </div>

            <p>הוסף תגובה</p>
            <textarea
              rows={4}
              cols={50}
              value={comment}
              onChange={handleCommentChange}
              placeholder='כתוב\כתבי תגובה...'
              className={styles.info}
            ></textarea>
            <br />
            <button onClick={handleSubmitComment}>Submit Comment</button>

            <br />
            <br />
            <div style={{ width: '400px' }}>
              {imposterToDisplay.comments.map((comment) => (
                <div style={{ 'margin-bottom': '10px' }}>
                  <Card content={comment}></Card>
                </div>
              ))}
            </div>
            <br />
          </Box>
        </center>
      )}
    </>
  );
};
export default ProfileDisplay;
