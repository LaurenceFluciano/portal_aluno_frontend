import useUser from "@/hook/useUser"

export default function Tutoria() {
    const { user } = useUser()

    const firstName = user.nome.split(' ')[0];

    return (
        <div className="dashboard__container">
            <div className="prompt">
                <div className="prompt__header">
                    <span className="prompt__avatar">
                        
                    </span>
                    <div className="prompt__name">
                        {firstName}
                    </div>
                </div>
                <div className="prompt_message">
                    Explique computação quantica
                </div>
            </div>
        </div>
    )
}