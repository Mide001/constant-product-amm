// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;
import "./IERC20.sol";

contract CPAMM {
    // constant product AMM XY = K
    IER20 public immutable token0;
    IER20 public immutable token1;

    uint public reserve0;
    uint public reserve1;

    uint public totalSupply;
    mapping (address => uint) public balanceOf;

    constructor(address _token0, address _token1) {
        token0 = IERC20(_token0);
        token1 = IERC20(_token1);
    }

    function _mint(address _to, uint _amount) private {
        balanceOf[_to] += _amount;
        totalSupply += _amount;
    }

    function _burn(address _from, uint _amount) private {
        balanceOf[_from] -= _amount;
        totalSupply -= _amount;
    }
    
    function _update(uint _reserve0, uint _reserve1) private {
        reserve0 = _reserve0;
        reserve1 = _reserve1'
    }

    function swap(address _tokenIn, uint _amountIn) external returns (uint amountOut) {
        require(_tokenIn == address(token0) || _tokenIn == address(token1, "invalid token"));
        require(_amountIn > 0, "amount in must be greater than 0");

        // Set swap parameters based on whether _tokenIn is equal to token0.
        // If not, adjust parameters for token1.

        
        bool isToken0 = _tokenIn == address(token0);
        (IERC20 tokenIn, IERC20 tokenOut, uint reserveIn, uint reserveOut) = isToken0
            ? (token0, token1, reserve0, reserve1)
            : (token1, token0, reserve1, reserve0);

        tokenIn.transferFrom(msg.sender, address(this), _amountIn);

        /* 
        xy = k
        using first order ODE's
        
        (x+dx)(y-dy) = k
        divide both sides  using (x+dx)
        y - dy = k / (x+dx)
        make dy the subject formula
        -dy = -(y - k / (x+dx))
        dy = (y - k) / (x+dx) 

        remember k = xy 
        dy = (y - dy) / (x + dx)
        (yx + ydx - xy) / (x + dx) = dy
        ydx / (x + dx) = dy
        */

        // 0.5% fee
        uint amountInWithFee = (_amountIn * 995) / 1000;
        amountOut = (reserveOut * amountInWithFee) / (reserveIn + amountInWithFee);

        tokenOut.transfer(msg.sender, amountOut);

        _update(token0.balanceOf(address(this)), token1.balanceOf(address(this)));
    }
}
