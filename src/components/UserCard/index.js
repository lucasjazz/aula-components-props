import './style.css'

export default function UserCard({ name, jobRole, avatar }) {
    return (
        <div className="user-card">
            <img src={avatar} alt="profileImage" />
            <strong>{name}</strong>
            <span>{jobRole}</span>
            <button>Portifólio</button>
        </div>
    );
};