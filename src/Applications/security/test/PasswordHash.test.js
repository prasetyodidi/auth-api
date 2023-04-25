const PasswordHash = require("../PasswordHash");
describe('PasswordHash interface', function () {
    it('should throw error when invoke abstract behavior',  async function () {
        const passwordHash = new PasswordHash();

        await expect(passwordHash.hash('dummy_password')).rejects.toThrowError('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED');
    });
});
