import React from 'react';
import DownloadButton from '@site/src/components/DownloadButton';

const getExtension = (fileType) => {
  const mimeMap = {
    'application/pdf': '.pdf',
    'image/png': '.png',
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/webp': '.webp',
  };

  return mimeMap[fileType] || '';
};

const AssetDisplay = ({ imgSrc, name, fileType, downloadUrl }) => {
  const isPdf = fileType === 'application/pdf';

  return (
    <div className="asset-display">
      {isPdf ? (
        <iframe
          src={imgSrc}
          title={name}
          width="100%"
          height="400"
          style={{ border: '1px solid #ccc' }}
        />
      ) : (
        <img
          src={imgSrc}
          alt={name}
          style={{ maxHeight: '10rem' }}
        />
      )}

      <p>Type: {fileType}</p>

      <DownloadButton
        url={downloadUrl}
        filename={`${name}${getExtension(fileType)}`}
      >
        Download
      </DownloadButton>
    </div>
  );
};

export default AssetDisplay;