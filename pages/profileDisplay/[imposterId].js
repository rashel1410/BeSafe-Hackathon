import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useGlobalContext } from '../../public/context';
import { useRouter } from 'next/router';
import Avatar from '@mui/material/Avatar';

const ProfileDisplay = () => {
  const router = useRouter();
  const { imposterId } = router.query;

  const { imposters, isPending } = useGlobalContext();
  const [comment, setComment] = useState('');
  const [sampleText] = useState('This is some sample text inside the text box.');
  const [imposterToDisplay, setImposterToDisplay] = useState(null);

  useEffect(() => {
    // Ensure imposters is not null before using find
    if (imposters) {
      // Find the imposter with the matching id
      const foundImposter = imposters.find((imposter) => imposter.id === imposterId);

      if (foundImposter) {
        setImposterToDisplay(foundImposter);
        console.log(foundImposter.first_name); // Log here, within the useEffect
      }
    }
  }, [imposterId, imposters]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    // Handle the submission of the comment (e.g., send it to a server, update state, etc.)
    console.log('Submitted Comment:', comment);
    // You can add additional logic here based on your requirements
  };

  return (
    <>
      {imposterToDisplay && (
        <center>
          <Head>
            <title>Ninja List | Profile Display </title>
            <meta name='keywords' content='ninjas' />
          </Head>
          <h1>{imposterToDisplay.first_name}</h1>


          <Avatar src={imposterToDisplay.img_url} />

          {/* <Image
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
            alt="Profile Image"
            width={200}
            height={100}
          /> */}
          <br />
          <a href={imposterToDisplay.profile_url} target="_blank" rel="noopener noreferrer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
              alt="Instagram Logo"
              width={30}
              height={30}
            />
          </a>

          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook Logo"
              width={30}
              height={30}
            />
          </a>
          <br />
          <p>דיווח</p>
          <textarea
            rows={4}
            cols={50}
            value={imposterToDisplay.info}
            readOnly
          ></textarea>
          <br />
          <textarea
            rows={4}
            cols={50}
            value={imposterToDisplay.comments}
            readOnly
          ></textarea>
          <br />
          <textarea
            rows={4}
            cols={50}
            value={imposterToDisplay.comments}
            readOnly
          ></textarea>

          <br />
          <p>הוסף תגובה</p>
          <textarea
            rows={4}
            cols={50}
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
          ></textarea>
          <br />
          <button onClick={handleSubmitComment}>Submit Comment</button>
        </center>
      )}
    </>
  );
};

export default ProfileDisplay;