//Dependency,circular dependecy


class Database{
    //CRUD
    create() {
        //create
    }
}


class User{
    db;
    // constructor(dbObj) { //INJECTION
    //     this.db = dbObj
    // }

    constructor() {
        this.db = new Database()  //INVERSION
        
    }
    userCreate() {
        this.db.create()
    }
}

const userObj = new User(new Database())


//Dependcy Inversion