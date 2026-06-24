export default function Avatar({
    username = "Usuário Anônimo"
}) {
    const nameParts = username.trim().split(/\s+/);

    const initials =
        nameParts[0][0] +
        (nameParts[1]?.[0] || '');

    return (
        <div className="avatar">
            {initials.toUpperCase()}
        </div>
    );
}