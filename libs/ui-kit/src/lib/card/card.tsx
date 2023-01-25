import './card.scss';

export interface CardPropType {
  user: { name: string; email: string; avatar?: string };
}

export function Card({ user }: CardPropType) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return (
    <div
      className="background-color-light 
            box-shadow-heavy 
            width-lg 
            min-height-md 
            hover:scale-up  transition-all-slow 
            flex flex-column justify-between p-lg
    "
    >
      <div className="flex">
        <div className="width-sm height-sm background-color-dark border-round text-align-center p-md mr-lg mb-lg">
          <img
            className="height-full"
            src={`/assets/images/${user.avatar}`}
            alt="{ user.name }"
          />
        </div>
        <div>
          <div className="text-xl mb-sm">{user.name}</div>
          <div>{user.email}</div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="border-none outline-none background-color-light color-primary py-sm px-md text-align-center cursor-pointer ml-md font-size-md transition-all-fast hover:box-shadow-heavy">
          Delete
        </button>
        <button className="border-none outline-none background-color-accent color-light py-sm px-md text-align-center cursor-pointer ml-md font-size-md transition-all-fast hover:box-shadow-heavy">
          Edit
        </button>
      </div>
    </div>
  );
}
