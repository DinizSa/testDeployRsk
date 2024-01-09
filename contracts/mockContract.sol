pragma solidity 0.8.19;

contract mockContract {
    uint a  = 0;

    function getA() public view returns (uint) {
        return a;
    }

    function setA(uint _a) public {
        a = _a;
    }
}