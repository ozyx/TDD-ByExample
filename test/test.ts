import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as chai from "chai";
import Dollar from "../Dollar";
import Franc from "../Franc";

@suite class DollarTests {
    @test "testMultiplication"() {
        let five: Dollar = new Dollar(5);
        let ten: Dollar = five.times(2);
        chai.expect(ten.getAmount()).to.equal(10);
    }

    @test "testEquals"() {
        let dollar = new Dollar(4);
        let dollar2 = new Dollar(4);
        chai.expect(dollar).to.deep.equal(dollar2);
    }

    @test "testNotEquals"() {
        let dollar = new Dollar(1);
        let dollar2 = new Dollar(2);
        chai.expect(dollar).to.not.deep.equal(dollar2);
    }
}

@suite class FrancTests {
    @test "testMultiplication"() {
        let five: Franc = new Franc(5);
        let ten: Franc = five.times(2);
        chai.expect(ten.getAmount()).to.equal(10);
    }

    @test "testEquals"() {
        let franc = new Franc(4);
        let franc2 = new Franc(4);
        chai.expect(franc).to.deep.equal(franc2);
    }

    @test "testNotEquals"() {
        let franc = new Franc(1);
        let franc2 = new Franc(2);
        chai.expect(franc).to.not.deep.equal(franc2);
    }
}