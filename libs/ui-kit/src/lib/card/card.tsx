import './card.scss';

export interface CardPropType {
  user: { name: string; email: string; avatar?: string };
}

export function Card({ user }: CardPropType) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return (
    <div className="user-card">
      <div className="user-card__top">
        <div className="user__avatar">
          <img alt="" src={'/assets/images/' + user.avatar} />
        </div>
        <div className="user__info">
          <div className="user__name">{user.name}</div>
          <div className="user__email">{user.email}</div>
        </div>
      </div>
      <div className="user-card__bottom">
        <button className="btn1">Delete</button>
        <button className="btn2">Edit</button>
      </div>
    </div>
  );
}
