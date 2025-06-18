const userInfo = [
    {
        name: "Kshitiz Adhikari",
        email: "kshitizadhikari8@gmail.com",
        address: "Lalitpur",
        phone: 9806917839
    },
];

//for each
userInfo.forEach((value, index) => {
    //console.log(value);
    console.log("Name: " +value.name);
    console.log("Email: " +value.email);
    console.log("Address: "+value.address);
    console.log("Phone: "+value.phone);
})
//Act yourself as a senior level