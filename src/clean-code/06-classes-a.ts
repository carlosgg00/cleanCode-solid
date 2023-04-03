(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}

    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super( name, gender, birthdate )
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectiry: string,
            public lastOpenFolder  : string,
            email                  : string,
            rol                    : string,
            name                   : string,
            gender                 : Gender,
            birthdate              : Date
        ){
            super( email, rol, name, gender, birthdate );
        }
    }

    const userSettings = new UserSettings(
        'usr/home',
        '/home',
        'carlos@google.com',
        'Admin',
        'Carlos',
        'M',
        new Date('2000-09-12')
    );

    console.log({ userSettings })


})();