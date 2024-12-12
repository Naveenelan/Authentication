import React, { useState } from "react";
import './user.css'; // Link to your CSS file
const User = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("https://your-backend-api-url/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("File uploaded successfully!");
      } else {
        setUploadStatus("File upload failed. Try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="user-container">
      <h2>User Dashboard</h2>
      <div className="upload-section">
        <input
          type="file"
          className="file-input"
          onChange={handleFileChange}
        />
        <button
          onClick={handleUpload}
          className="upload-btn"
        >
          Upload File
        </button>
      </div>
      {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
    </div>
  );
};

export default User;