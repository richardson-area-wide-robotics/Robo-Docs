import React, { useRef, useState } from 'react';
import DownloadButton from '@site/src/components/DownloadButton';

const VideoPlayer = ({
    videoSrc,
    poster,
    name,
    fileType = 'Video (.mp4)',
    downloadUrl,
    autoPlay = false,
    loop = false,
    muted = false,
}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div
            className="video-player-card"
            style={{
                border: '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: '1rem',
                padding: '1rem',
                maxWidth: '800px',
                margin: '1rem auto',
                background: 'var(--ifm-background-surface-color)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}
        >
            <video
                ref={videoRef}
                src={videoSrc}
                poster={poster}
                controls
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                style={{
                    width: '100%',
                    borderRadius: '0.75rem',
                    backgroundColor: '#000',
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '1rem',
                    gap: '1rem',
                    flexWrap: 'wrap',
                }}
            >
                <div>
                    <h3 style={{ marginBottom: '0.25rem' }}>{name}</h3>
                    <p style={{ margin: 0 }}>Type: {fileType}</p>
                </div>

                <div
                    style={{
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'center',
                    }}
                >
                    <button
                        onClick={togglePlay}
                        style={{
                            border: 'none',
                            borderRadius: '0.5rem',
                            padding: '0.6rem 1rem',
                            cursor: 'pointer',
                            background: 'var(--ifm-color-primary)',
                            color: 'white',
                            fontWeight: 600,
                        }}
                    >
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>

                    <DownloadButton
                        url={downloadUrl}
                        filename={`${name}${fileType
                            .split(' ')[1]
                            .replace('(', '')
                            .replace(')', '')}`}
                    >
                        Download
                    </DownloadButton>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;