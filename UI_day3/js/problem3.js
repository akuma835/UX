let vehicle = {
    make: 'Tesla',
    model: 'D2',
    year: 2012,
    color: 'Red'
};

(function () {
    alert(vehicle["make"]+vehicle["model"]);
    alert(JSON.stringify(vehicle));

    
}
)();