const UserRepository = require("../UserRepository");
describe('UserRepository interface', function () {
    it('should throw error when invoke abstract behavior', async function () {
        // Arrange
        const userRepository = new UserRepository();

        await expect(userRepository.addUser({})).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
        await expect(userRepository.verifyAvailableUsername('')).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    });
});
