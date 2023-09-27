import useFileUploader from "./hooks/useFileUploader"

export default function App() {
    const { FileUploader, reset } = useFileUploader()

    return (
        <div>
            <button onClick={() => reset()}>Reset</button>
            <FileUploader />
        </div>
    )
}