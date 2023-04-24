const AuthenticationError = require("../AuthenticationError");
describe('AuthenticationError', function () {
    it('should create AuthenticationError correctly', function () {
        const authenticationError = new AuthenticationError('authentication error!');

        expect(authenticationError.statusCode).toEqual(401);
        expect(authenticationError.message).toEqual('authentication error!');
        expect(authenticationError.name).toEqual('AuthenticationError');
    });
});
