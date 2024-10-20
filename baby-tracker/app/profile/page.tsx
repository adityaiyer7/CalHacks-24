"use client";
import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import Navbar from "../components/Navbar";
import PDFReportContent from "../components/PDFReportContent";

export default function Profile() {
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


    useEffect(() => {
        console.log("isRecording", isRecording);
    }, [isRecording]);

    return (
        <div className="flex flex-row justify-start items-start overflow-y-hidden md:pb-0 pb-32">
            <div className="flex flex-row justify-stretch items-stretch w-full h-screen">
                <Navbar handleAIBotClick={handleAIBotClick} />
                <div className="flex flex-col justify-center items-center bg-foreground rounded-l-[50px] w-full h-auto">
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

                    <div className="bg-background shadow-lg rounded-[20px] p-16 w-full max-w-sm">
                        {/* Baby Picture */}
                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/avatar.jpg" // Replace with actual image path
                                alt="Baby Profile"
                                className="w-18 h-18 rounded-full border-4 border-foreground object-cover"
                            />
                        </div>

                        {/* Baby Information */}
                        <div className="text-center">
                            <h2 className="text-xl text-yellow-400 font-bold mb-2">Bytes Hacker</h2>
                            <p className="text-white">😎Male</p>
                            <p className="text-white">🎂October 18, 2023</p>
                            <p className="text-white">💪15 lbs</p>
                            <p className="text-gwhite">📏24 inches</p>
                        </div>

                        {/* Milestones, Health Info, etc. */}
                        <div className="mt-4">
                            <h3 className="text-lg text-foreground underline font-semibold mb-2">Milestones</h3>
                            <ul className="list-disc list-inside text-white">
                                <li>First smile: March 1, 2024</li>
                                <li>First word: July 15, 2024</li>
                                <li>First steps: September 10, 2024</li>
                            </ul>
                        </div>

                        {/* Buttons or Links */}
                        <div className="mt-6 flex justify-between">
                            <button className="px-4 py-2 bg-teal-500 text-white rounded-[20px] hover:bg-teal-600">
                                Edit Profile
                            </button>
                            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-[20px] hover:bg-gray-400">
                                Upload Avatar
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
