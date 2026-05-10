import React, {useState} from 'react';
import DownloadButton from '@site/src/components/DownloadButton';
import './PDFDisplay.css';

const PDFDisplay = ({
    pdfUrl,
    name = 'Document',
    height = '700px',
}) => {
    const [page, setPage] = useState(1);

    const nextPage = () => {
        setPage((prev) => prev + 1);
    };

    const prevPage = () => {
        setPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className="pdf-display">
            <div className="pdf-viewer-wrapper">
                <iframe
                    title={name}
                    src={`${pdfUrl}#page=${page}`}
                    className="pdf-viewer"
                    style={{height}}
                />
            </div>

            <div className="pdf-toolbar">
                <button
                    className="pdf-button"
                    onClick={prevPage}
                    disabled={page === 1}
                >
                    ← Previous
                </button>

                <span className="pdf-page-indicator">
                    Page {page}
                </span>

                <button
                    className="pdf-button"
                    onClick={nextPage}
                >
                    Next →
                </button>

                <DownloadButton
                    url={pdfUrl}
                    filename={`${name}.pdf`}
                >
                    Download PDF
                </DownloadButton>
            </div>
        </div>
    );
};

export default PDFDisplay;