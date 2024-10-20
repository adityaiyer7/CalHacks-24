// components/PDFReportContent.js

const PDFReportContent = ({ title, description, recordingStatus, generatedOn }) => {
    return (
        <div className="border border-gray-400 text-black p-4 shadow-sm mt-10 h-[80vh] overflow-auto">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{description}</p>
            <p><strong>Recording Status:</strong> {recordingStatus}</p>
            <p><strong>Generated on:</strong> {generatedOn}</p>

            <div className="mt-10">
                <h2 className="text-xl font-bold">PDF Report Content</h2>
                <p>This section is reserved for content displayed in the PDF.</p>
            </div>
        </div>
    );
};

export default PDFReportContent;