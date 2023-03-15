import "./styles/TeamCard.css";

interface props {
  img: string;
  name: string;
  roles: Array<string>;
}

function TeamCard({ img, name, roles }: props) {
  const title = name.trim().toLowerCase().replace(" ", "_");

  return (
    <div className="team-card">
      <img className="team-card__img" src={img} alt={name} />
      <div className="team-card__separator" />
      <div className="team-card__info">
        <h3 className="team-card__info__title">{title}</h3>
        <div className="team-card__info__separator" />
        <div className="team-card__info__roles">
          {roles.map((role) => (
            <p className="team-card__info__roles__role no-margin">{role}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
