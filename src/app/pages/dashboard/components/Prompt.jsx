import { ArrowUp } from "lucide-react";
import { Group } from "@/components/layout/Group"
import { useRef } from "react";

function PromptRoot({ children }) {
    return (
        <Group layout={{default: 'col'}} className="prompt align--middle-start mx--auto">
            {children}
        </Group>
    )
}


function PromptInput({ value, onChange }) {
    const textareaRef = useRef(null);

    const handleInput = (e) => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
        
        if (onChange) onChange(e);
    };

    return (
        <textarea
            ref={textareaRef}
            value={value}
            onChange={handleInput}
            className="prompt__input"
            placeholder="Pergunte ao Tutor IA..."
            rows={1}
        />
    );
}

function PromptSubmitButton({ onSubmit, isDisabled }) {
    return (
        <button 
            className={`prompt__submit-button ml--auto ${isDisabled ? 'prompt__submit-button--disabled' : ''}`}
            onClick={onSubmit}
            disabled={isDisabled}
        >
            <ArrowUp size={18} />
        </button>
    )
}

const Prompt = Object.assign(PromptRoot, {
    Input: PromptInput,
    SubmitButton: PromptSubmitButton
});

export default Prompt;
