'use strict';

describe('application launch', () => {
    before(function() {
        this.app = new Application({
            path: electronPath,
            args: [ appPath ]
        });
    });

    beforeEach(function() {
        return this.app.start();
    });

    afterEach(function() {
        if (this.app && this.app.isRunning()) {
            return this.app.stop();
        }
    });

    it('should open a window', function(done) {
        this.app.client
            .getWindowCount()
            .then(count => {
                expect(count).to.equal(1);

                done();
            });
    });

    it('should be the correct title', function(done) {
        this.app.client
            .getTitle()
            .then(title => {
                expect(title).to.be.a('string');
                expect(title).to.equal(config.APP_TITLE);

                done();
            });
    });
});
