"use client";
import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import Navbar from "../components/Navbar";
import PDFReportContent from "../components/PDFReportContent";
import DataEntryBar from "../components/DataEntryBar";

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


    return (
        <div className="flex flex-row justify-start items-start overflow-y-hidden md:pb-0 pb-32">
            <div className="flex flex-row justify-stretch items-stretch w-full h-screen">
                <Navbar/>
                <div className="flex flex-col justify-center items-center bg-foreground rounded-l-[50px] w-full h-auto">

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
                            <p className="text-white">😎 Male</p>
                            <p className="text-white">🎂 October 18, 2023</p>
                            <p className="text-white">💪 15 lbs</p>
                            <p className="text-gwhite">📏 24 inches</p>
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
