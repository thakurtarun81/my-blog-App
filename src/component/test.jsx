const onHandleSubmit = (data) => {
  if (data.password !== data.confirmPassword) {
    setPassworderr("password must be same");
    return;
  } else {
    setPassworderr("");
  }

  let nextId = 1;
  if (users.length > 0) {
    let sortedUsers = [...users].sort((a, b) => b.id - a.id);
    nextId = sortedUsers[0].id + 1;
  }

  let newUser = {
    id: nextId,
    name: data.name,
    age: data.age,
    password: data.password,
  };

  setUsers([newUser, ...users]);
};
