let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../backend/routes/userRoute");

chai.should();

chai.use(chaiHttp);

describe('tasks API', () => {
    describe("GET /createadmin", () => {
        it("It should return admin", (done) => {
            chai.request(server)
            .get("/createadmin")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.be.eq(1);
                done();
            })
        })
    })
})