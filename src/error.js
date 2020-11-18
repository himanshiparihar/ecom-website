const  errors = {
    401: {
        id :  Math.floor((Math.random() * 101) + 1),
        title: "Invalid",
        description: "Please Check Your Email or Password"
    },
    500: {
        id :  Math.floor((Math.random() * 101) + 1),
        title: "Server Error",
        description: "Please try again after sometime"
    },
}

export default errors;