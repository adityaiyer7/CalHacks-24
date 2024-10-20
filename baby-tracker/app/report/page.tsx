"use client";
import { useState } from "react";
import { jsPDF } from "jspdf";
import Navbar from "../components/Navbar";
import PDFReportContent from "../components/PDFReportContent"; 

export default function Report() {
    const [isAIBotOpen, setIsAIBotOpen] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [pdfContent, setPdfContent] = useState({
        title: "AI Report",
        description: "This is a generated PDF report from our AI app.",
        recordingStatus: "Not Recording",
        generatedOn: new Date().toLocaleString(),
    });

    const handleAIBotClick = () => {
        setIsAIBotOpen(!isAIBotOpen);
    };

    const handleRecording = () => {
        setIsRecording(!isRecording);
        // Update the PDF content when recording status changes
        setPdfContent(prevContent => ({
            ...prevContent,
            recordingStatus: !isRecording ? "Recording" : "Not Recording",
            generatedOn: new Date().toLocaleString(),
        }));
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFont("Helvetica");
    
        // Add title
        doc.setFontSize(20);
        doc.text(pdfContent.title, 20, 20);
        
        // Add description
        doc.setFontSize(16);
        doc.text(pdfContent.description, 20, 30);
        
        // Add recording status
        doc.setFontSize(16);
        doc.text("Recording Status: " + pdfContent.recordingStatus, 20, 40);
        
        // Add generated date
        doc.text("Generated on: " + pdfContent.generatedOn, 20, 50);
        
        // Add PDF report content section title
        doc.setFontSize(18);
        doc.text("PDF Report Content", 20, 70);
        
        // Add reserved content displayed in the PDF
        doc.setFontSize(14);
        doc.text("This section is reserved for content displayed in the PDF.", 20, 80);
    
        // Save the PDF
        doc.save("AI_Report.pdf");
    };
    

    return (
        <div className="flex flex-row justify-start items-start overflow-y-hidden md:pb-0 pb-32">
            <div className="flex flex-row justify-stretch items-stretch w-full h-screen">
                <Navbar handleAIBotClick={handleAIBotClick} />
                <div className="flex flex-col justify-between items-center bg-foreground rounded-l-[50px] w-full h-auto">
                    {/* {isAIBotOpen && (
                        <div className="flex justify-center items-center hover:animate-wiggle hover:opacity-70 hover:cursor-pointer">
                            <div className="relative">
                                <div className="absolute left-[45px;] top-[-12px;] z-10">
                                    {isRecording ? (
                                        <img
                                            src="/images/history.png"
                                            alt="Recording Audio animation"
                                            className="w-1/2 h-auto bg-black"
                                        />
                                    ) : (
                                        <svg width={60} height={60} viewBox="0 0 60 60" fill="fill" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.9998 25.3333V28M15.9998 25.3333C11.0955 25.3333 8.19552 22.3268 6.68555 20M15.9998 25.3333C20.9041 25.3333 23.804 22.3268 25.314 20M21.3331 9.33333V14.6667C21.3331 17.6122 18.9453 20 15.9998 20C13.0543 20 10.6664 17.6122 10.6664 14.6667V9.33333C10.6664 6.38781 13.0543 4 15.9998 4C18.9453 4 21.3331 6.38781 21.3331 9.33333Z"
                                                stroke="#000000"
                                                strokeWidth={3}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <button onClick={handleRecording}>
                                <img
                                    src="/images/AIVoice.gif"
                                    alt="AI Voice Icon"
                                    className="w-1/2 h-auto"
                                />
                            </button>
                            <div className="flex flex-row justify-center items-center w-11/12 md:w-3/4 my-5">
                                <DataEntryBar handleAIBotRecording={handleRecording} />
                            </div>
                        </div>
                    )} */}

                    {/* PDF Report Content Display */}
                    <PDFReportContent
                        title={pdfContent.title}
                        description={pdfContent.description}
                        recordingStatus={pdfContent.recordingStatus}
                        generatedOn={pdfContent.generatedOn}
                    />

                    {/* PDF Report Button */}
                    <div className="flex flex-col items-center my-5">
                        <button
                            onClick={generatePDF}
                            className="px-10 py-4 bg-[#27595A] text-white rounded-[50px] hover:bg-[#FF7600] mb-5"
                        >
                            Download PDF
                        </button>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}
