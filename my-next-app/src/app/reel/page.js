"use client"
import React from 'react';

export default function InstagramCard() {
  return (
    <>

      <div className="card" role="region" aria-label="Instagram app prompt card">
        <img
          src="https://placehold.co/72x72/png?text=Profile"
          alt="Portrait of a young man with curly dark hair wearing round glasses, smiling at a social event with blurred people in the background"
          className="profile-img"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/72x72?text=No+Image'; }}
        />
        <h2>See this post in the app</h2>
        <p className="description">Use the app to view all comments and discover more posts.</p>
        <p className="legal">
          By continuing, you agree to Instagram's{' '}
          <a href="https://help.instagram.com/581066165581870" target="_blank" rel="noopener noreferrer">
            Terms of Use
          </a>{' '}
          and{' '}
          <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          .
        </p>
        <button className="btn" type="button" aria-label="Open Instagram app">
          Open Instagram
        </button>
        <a href="#" className="signup" tabIndex={0}>
          Sign up
        </a>
      </div>
    </>
  );
}

