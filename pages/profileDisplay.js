import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const ProfileDisplay = () => {
  const [comment, setComment] = useState('');
  const [sampleText] = useState('This is some sample text inside the text box.');

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
    <center>
      <Head>
        <title>Ninja List | Profile Display </title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <h1>שם מתחזה </h1>
      <Image
        src="/logo.png"
        alt="Profile Image"
        width={200} // Set the width of the image
        height={100} // Set the height of the image
      />
      <br />
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
          alt="Instagram Logo"
          width={30} // Set the width of the image
          height={30} // Set the height of the image
        />
      </a>
      
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook Logo"
          width={30} // Set the width of the image
          height={30} // Set the height of the image
        />
      </a>
      <br />
      <p>דיווח</p>
      <textarea
        rows={4}
        cols={50}
        value={sampleText} // Set the initial text inside the text box
        readOnly // Make the text box read-only
      ></textarea>
      <br />
      <textarea
        rows={4}
        cols={50}
        value={"תגובה מספר 1"} // Set the initial text inside the text box
        readOnly // Make the text box read-only
      ></textarea>
      <br />
      <textarea
        rows={4}
        cols={50}
        value={"תגובה מספר 2"} // Set the initial text inside the text box
        readOnly // Make the text box read-only
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
    </>

    

  );
};

export default ProfileDisplay;
