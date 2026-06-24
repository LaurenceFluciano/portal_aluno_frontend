import { AlertTriangle } from "lucide-react";

export default function ErrorDialog({ message = "" }) {
    return (
        <>
            {message.length > 0 && (
                <div className="error__dialog">
                    <AlertTriangle />
                    <span>{message}</span>
                </div>
            )}
        </>
    );
}