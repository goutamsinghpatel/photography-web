import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContent } from "../context/AppContext";

export default function UploadImage() {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");

  const { backendUrl } = useContext(AppContent);
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);

  const handleUpload = async () => {
    if (!email || files.length === 0) {
      toast.error("Please select photos");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);

    files.forEach((file) => {
      formData.append("imageFiles", file); 
    });

    try {
      const { data } = await axios.post(
        backendUrl + "/upload-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6">
      <h1 className="text-2xl mb-6">Upload Images for {email}</h1>

      {/* FILE INPUT */}
      <label
        className="
          mb-4 px-5 py-3 rounded-lg bg-slate-800 text-white
          hover:bg-slate-700 cursor-pointer transition
        "
      >
        Choose Files
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files))}
          className="hidden"
        />
      </label>

      {files.length > 0 && (
        <p className="text-white mb-3">{files.length} file(s) selected</p>
      )}

      <button
        onClick={handleUpload}
        className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded"
        style={{
          cursor:"pointer"
        }}
      >
       
        Upload
      </button>
    </div>
  );
}
