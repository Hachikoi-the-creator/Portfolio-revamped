import React, { useEffect, useState } from "react";

function UserInfo({ name }) {
  const [user, setUser] = useState({ name: name });
  useEffect(() => {
    setUser({
      name: user.name,
      avatar: `//ui-avatars.com/api/?name=${user.name}`,
    });
  }, []);
  return <Avatar user={user} />;
}

function Avatar(props) {
  console.log(`re-render avatar for ${JSON.stringify(props.user)}`);
  const [user, setUser] = useState({ ...props.user });

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  console.log(`state is ${JSON.stringify(user)}`);
  return user.avatar ? <img src={user.avatar} /> : <p>Loading...</p>;
}

ReactDOM.render(<UserInfo name={"John Doe"} />, document.getElementById("app"));
