function PromptRoot({ children }) {
    return (
        <div className="prompt">
            { children }
        </div>
    )
}

function PromptInput({ value, onChange }) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            className="prompt__input" 
        />
    )
}

function PromptSubmitButton({ children, onSubmit }) {
    return (
        <button 
            className="prompt__submit-button"
            onClick={onSubmit}
        >
            { children }
        </button>
    )
}

const Prompt = Object.assign(PromptRoot, {
    Input: PromptInput,
    SubmitButton: PromptSubmitButton
});

export default Prompt;
