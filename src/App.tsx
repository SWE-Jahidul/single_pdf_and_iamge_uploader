import { useState } from "react";
import FileUploader from "./FileUploader";

export default function App() {
    const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
    const [selectedFile2, setSelectedFile2] = useState<File | null>(null);

    return (
        <div>
            <FileUploader {...{ selectedFile: selectedFile1, setSelectedFile: setSelectedFile1 }} />
            <FileUploader {...{ selectedFile: selectedFile2, setSelectedFile: setSelectedFile2 }} />
        </div>
    )
}