import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as chai from "chai";
import Dollar from "../Dollar";
import Franc from "../Franc";
@suite class DollarTests {
    @test "testMultiplication"() {
        let five: Dollar = new Dollar(5);
        let ten: Dollar = five.times(2);
        chai.assert(10 === ten.getAmount(), `${ten.getAmount()} is not equivalent to 10`);
    }

    @test "testEquals"() {
        let dollar = new Dollar(4);
        let dollar2 = new Dollar(4);
        chai.assert(dollar.getAmount() === dollar2.getAmount(), `${dollar.getAmount()} is not equivalent to ${dollar2.getAmount()}`);
    }
}

@suite class FrancTests {
    @test "testMultiplication"() {
        let five: Franc = new Franc(5);
        let ten: Franc = five.times(2);
        chai.assert(10 === ten.getAmount(), `${ten.getAmount()} is not equivalent to 10`);
    }
}