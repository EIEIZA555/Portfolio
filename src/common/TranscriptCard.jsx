import React from 'react';

function TranscriptCard({ pdf, alt }) {
  const pdfUrl = `${pdf}#toolbar=0`;

  return (
    <div
      className="transcript-card"
      style={{
        position: 'relative',
        width: '1000px',
        height: '900px',
        overflow: 'hidden',
      }}
      onContextMenu={e => e.preventDefault()} // disables right-click on the container
    >
      <iframe
        src={pdfUrl}
        title={alt || "Transcript PDF"}
        className="transcript-pdf"
        width="1000px"
        height="900px"
        style={{ border: 'none', borderRadius: '10px' }}
      />
      {/* Overlay to block pointer events but allow scrolling */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1000px',
          height: '900px',
          zIndex: 2,
          background: 'transparent',
          pointerEvents: 'none', // <-- allow scrolling
        }}
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  );
}

export default TranscriptCard;