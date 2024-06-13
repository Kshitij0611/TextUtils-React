import React from 'react'

export default function Video({ video }) {
    return (
      <div>
        <a href={video.url}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </a>
      </div>
    );
  }