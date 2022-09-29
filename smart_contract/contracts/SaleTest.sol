// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./access/Ownable.sol";
import "./token/ERC721/ERC721.sol";
import "./token/ERC20/ERC20.sol";
import "./NFTcreatorTest.sol";

// 사용자 간 NFT 판매 및 구매에 관한 컨트랙트
contract SaleToken is Ownable{
 
    NFTcreator public Token;
    // JwToken 컨트랙트와 상호작용하기 위한 상태변수
 
    constructor(address _tokenAddress) {
        Token = NFTcreator(_tokenAddress);
    }
 
    struct TokenInfo {
        uint tokenId;
        uint price;
    }
 
    mapping(uint => uint) public tokenPrices;
    // tokenId => price
    // 토큰 가격 맵핑
    function approvalForAll(address _operator) public{
        Token.setApprovalForAll(_operator, true);
    }
    uint[] public SaleTokenList;
    // 판매중인 NFT의 tokenId 값을 배열 안에 담아 놓은 상태변수
 
    // 판매 등록 함수
    function SalesToken(uint _tokenId, uint _price) public {
 
        address tokenOwner = Token.ownerOf(_tokenId); // tokenId 소유자 계정
        
        // 1. NFT 소유자만 판매 가능
        require(tokenOwner == msg.sender,"1");
 
        // 2. 판매 가격이 0보다 큰값인가
        require(_price > 0,"2");
 
        // 컨트랙트가 NFT의 모든 권한을 관리할 수 있도록 설정
        
        require(Token.isApprovedForAll(msg.sender, address(this)),"3");
        tokenPrices[_tokenId] = _price;
        
        SaleTokenList.push(_tokenId);
    }
 
    // 토큰 구매 함수
    function PurchaseToken(uint _tokenId) public payable {
        
        address tokenOwner = Token.ownerOf(_tokenId);
        
        // 1. 판매자가 자신의 토큰을 구매하는 것 방지
        require(tokenOwner != msg.sender);
 
        // 2. 판매 중인 토큰만 구매할 수 있도록 조건 체크
        // tokenPrices 값이 0 보다 클 경우 판매중인 상품으로 인식
        require(tokenPrices[_tokenId] > 0);
 
        // 3. 구매자가 지불한 이더가 판매가격 이상인지 체크
        require(tokenPrices[_tokenId] <= msg.value);
 
        // CA 가 판매자 계정에게 이더 전송
        payable(tokenOwner).transfer(msg.value);
 
        // Token.transferFrom() 실행 주체는 CA
        // 여기서 msg.sender는 PurchaseToken() 을 실행한 구매자
        Token.transferFrom(tokenOwner, msg.sender, _tokenId);
 
        // 판매 가격을 0으로 바꾸고 SaleTokenList 에서 값 제거
        tokenPrices[_tokenId] = 0;
        popSaleToken(_tokenId);
    }
 
    function cancelSaleToken(uint _tokenId) public {
    
        address tokenOwner = Token.ownerOf(_tokenId);
        
        // 1. 판매자인가
        require(tokenOwner == msg.sender);
        
        // 2. 판매중인가
        require(tokenPrices[_tokenId] > 0);
        
        tokenPrices[_tokenId] = 0;
        popSaleToken(_tokenId);
    }
 
    function popSaleToken(uint _tokenId) private returns (bool) {
        for (uint i = 0; i < SaleTokenList.length; i++) {
            if (SaleTokenList[i] == _tokenId) {
                // i == index
                SaleTokenList[i] = SaleTokenList[SaleTokenList.length - 1];
                SaleTokenList.pop();
                return true;
            }
        }
        return false;
    }
 
    // 전체 판매 리스트 view 함수
    function getSaleTokenList() public view returns (TokenInfo[] memory) {
        // [{tokenId: 1, Type: 1, Rank: 2, price: ..}] 형태로 만들어서 return
 
        require(SaleTokenList.length > 0);
 
        TokenInfo[] memory list = new TokenInfo[](SaleTokenList.length); // length 길이 만큼의 빈 값을 갖는 배열
        // const arr = new Array(4)
 
        for (uint i = 0; i < SaleTokenList.length; i++) {
            uint tokenId = SaleTokenList[i];
            uint price = tokenPrices[tokenId];
 
            list[i] = TokenInfo(tokenId, price);  // list 배열 안에 구조체 넣기
        }
 
        return list;
    }
 
}