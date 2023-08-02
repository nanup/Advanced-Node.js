const friends = [
  {
    id: 0,
    name: 'Nanu Panchamurthy',
  },
  {
    id: 1,
    name: 'Anil Kumar Pappu',
  },
  {
    id: 2,
    name: 'Akhil Kumar Tangi',
  },
];

function getFriends(req, res) {
  return res.json(friends);
}

function getFriendById(req, res) {
  if (+req.params.id < friends.length) {
    return res.json(friends[+req.params.id]);
  } else {
    return res.sendStatus(404).json({
      error: "Friend doesn't exist.",
    });
  }
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.sendStatus(400).json({
      error: 'Missing friend name.',
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);
  return res.json(newFriend);
}

module.exports = {
  getFriends,
  getFriendById,
  postFriend,
};
