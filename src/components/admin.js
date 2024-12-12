import React, { useState } from "react";
import './admin.css';



const Admin = () => {
  // Sample data for files, in a real scenario, you would fetch this from your backend
  const [files, setFiles] = useState([
    { id: 1, name: "file1.txt", content: "This is the content of file1." },
    { id: 2, name: "file2.txt", content: "This is the content of file2." },
  ]);

  const [newFileName, setNewFileName] = useState("");
  const [newFileContent, setNewFileContent] = useState("");
  const [editContent, setEditContent] = useState("");

  const handleCreateFile = () => {
    if (!newFileName || !newFileContent) {
      alert("Please provide a file name and content.");
      return;
    }

    const newFile = {
      id: files.length + 1,
      name: newFileName,
      content: newFileContent,
    };

    setFiles([...files, newFile]);
    setNewFileName("");
    setNewFileContent("");
  };

  const handleEditFile = (id) => {
    const updatedFiles = files.map((file) => {
      if (file.id === id) {
        file.content = editContent;
      }
      return file;
    });
    setFiles(updatedFiles);
    setEditContent("");
  };

  return (
    <div className="admin-container">
      <h1>Admin Page</h1>
      <p>Welcome to the Admin Dashboard!</p>

      <div className="file-actions">
        <h2>Manage Files</h2>

        {/* Create File Section */}
        <div className="create-file">
          <h3>Create a New File</h3>
          <input
            type="text"
            placeholder="Enter file name"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
          />
          <textarea
            placeholder="Enter file content"
            value={newFileContent}
            onChange={(e) => setNewFileContent(e.target.value)}
          />
          <button onClick={handleCreateFile}>Create File</button>
        </div>

        {/* File List */}
        <div className="file-list">
          <h3>Existing Files</h3>
          {files.length === 0 ? (
            <p>No files available.</p>
          ) : (
            <ul>
              {files.map((file) => (
                <li key={file.id} className="file-item">
                  <strong>{file.name}</strong>
                  <p>{file.content}</p>

                  {/* Edit File */}
                  <div className="edit-file">
                    <textarea
                      placeholder="Edit content"
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                    />
                    <button onClick={() => handleEditFile(file.id)}>
                      Save Changes
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
