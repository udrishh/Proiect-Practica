import React from 'react';
import './AppleMusic.css';

export default function AppleMusic() {
  return (
    <div>
        <iframe title="AppleMusic" allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="450" 
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
        src="https://embed.music.apple.com/ro/playlist/liked-songs/pl.u-yZyVEjrFd42jEB0"/>
    </div>
  );
}
