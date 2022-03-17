import React from "react";

function UserInfo({ name }) {
  const [user, setUser] = React.useState({ name: name });
  React.useEffect(() => {
    setUser({
      name: user.name,
      avatar: `//ui-avatars.com/api/?name=${user.name}`,
    });
  }, []);
  return <Avatar user={user} />;
}

function Avatar(props) {
  console.log(`re-render avatar for ${JSON.stringify(props.user)}`);
  const [user, setUser] = React.useState({ ...props.user });

  React.useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  console.log(`state is ${JSON.stringify(user)}`);
  return user.avatar ? <img src={user.avatar} /> : <p>Loading...</p>;
}

ReactDOM.render(<UserInfo name={"John Doe"} />, document.getElementById("app"));
