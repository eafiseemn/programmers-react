import type { UserType } from "@/@types/user";

type Props = {
  user: UserType;
}

const S = { color: 'inherit', textDecoration: 'none'} as React.CSSProperties;

function UserDetail({user}:Props) {
  const { name, email, city } = user;
  return (
    <li>
      <strong>{name}</strong>
      {" "}-{" "}
      <span>
        <a style={S} href={`mailto:${email}`}>
          {email} ({city})
        </a>
      </span>
    </li>
  );      
};

export default UserDetail