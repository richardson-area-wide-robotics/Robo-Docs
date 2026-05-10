import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import DownloadButton from '@site/src/components/DownloadButton';
import './PDFDisplay.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PDFDisplay = ({
    pdfUrl,
    name = 'Document',
    height = 700,
}) => {
    const [numPages, setNumPages] = useState(null);
    const [page, setPage] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const nextPage = () => {
        if (page < numPages) {
            setPage(page + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="pdf-display">
            <div
                className="pdf-viewer-wrapper"
                style={{ minHeight: height }}
            >
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading="Loading PDF..."
                >
                    <Page
                        pageNumber={page}
                        width={900}
                    />
                </Document>
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
                    Page {page} of {numPages || '--'}
                </span>

                <button
                    className="pdf-button"
                    onClick={nextPage}
                    disabled={page === numPages}
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