// const getGoals = (req, res) => {
//   res.status(200).json({
//     message: "getGoals"
//   })
// }

// const setGoal = (req, res) => {
//   res.status(200).json({
//     message: "setGoals"
//   })
// }

const getGoals = (req, res) => {
  res.status(200).json({
    message: "getGoals"
  })
}

const setGoals = (req, res) => {
  res.status(200).json({
    message: "setGoals"
  })
}


// PUT Method contoh 1
let user = [
    {
      id: 1,
    name: "Abia",
    email: "abababa@gmail.com"
    },
    {
      id: 2,
      name: "Jovfrin",
      email: "jovfrin@gmail.com"
    }
]

const putGoals = (req, res) => {
  //   if (parseInt(req.params.id) !== user.id) {
  //   return res.status(404).json({ message: "User not found" });
  // }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  res.json(user);
}

// // PUT Method Contoh dua
// const putGoals = (req, res) => {
//   res.status(200).json({
//     message: "putGoals"
//   })
// }


module.exports = {
  getGoals,
  setGoals,
  putGoals
}