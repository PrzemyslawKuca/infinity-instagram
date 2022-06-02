const getUserData = () => {
    return fetch(`https://randomuser.me/api/?results=5`)
        .then((res) => res.json())
        .then((res) => {
            return res
        })
        .catch((err) => console.log(err))
}

export default getUserData;
