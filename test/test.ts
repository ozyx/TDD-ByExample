import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as chai from "chai";
import Dollar from "../Dollar";
@suite class CurrencyTests {
    @test "testMultiplication"(){
        let five: Dollar = new Dollar(5);
        let ten: Dollar = five.times(2);
        chai.assert(10 === ten.getAmount(), "multiplication fail");
    }

    @test "testEquals"(){
        let dollar = new Dollar(4);
        let dollar2 = new Dollar(4);
        chai.assert(dollar.getAmount() === dollar2.getAmount(), "equality fail");
    }
}