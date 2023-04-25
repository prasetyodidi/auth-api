const RegisterUser = require("../RegisterUser");
describe('a RegisterUser entities', function () {
    it('should throw error when payload did not contain needed property', function () {
        const payload = {
            username: 'abc',
            password: 'abc',
        };

        expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    });

    it('should throw error when payload did not meet data type specification', function () {
        const payload = {
            username: 123,
            fullname: true,
            password: 'abc',
        };

        expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });

    it('should throw error when username contains mote than 50 character', function () {
        const payload = {
            username: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
            fullname: 'Dicoding Indonesia',
            password: 'abc',
        };

        expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_LIMIT_CHAR');
    });

    it('should throw error when username contains restricted character', function () {
        const payload = {
            username: 'dico ding',
            fullname: 'dicoding',
            password: 'abc',
        };

        expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
    });

    it('should create registered object correctly', function () {
        const payload = {
            username: 'dicoding',
            fullname: 'Dicoding Indonesia',
            password: 'abc',
        };

        const { username, fullname, password } = new RegisterUser(payload);

        expect(username).toEqual(payload.username);
        expect(fullname).toEqual(payload.fullname);
        expect(password).toEqual(payload.password);
    });
});