import React, { useEffect, useState } from 'react';
import { messaging } from './firebaseconfig/firebase';

const NotificationSettings = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    messaging.requestPermission()
      .then(() => messaging.getToken())
      .then((currentToken) => {
        if (currentToken) {
          setToken(currentToken);
          fetch('http://localhost:8080/api/save-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: currentToken }),
          });
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }, []);

  return (
    <div>
      <h2>Notification Settings</h2>
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default NotificationSettings;
