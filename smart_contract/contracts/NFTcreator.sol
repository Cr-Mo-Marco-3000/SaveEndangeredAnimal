// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./token/ERC721/ERC721.sol";
import "./token/ERC721/extensions/ERC721Enumerable.sol";

/**
 * PJT Ⅰ - 과제 2) NFT Creator 구현
 * 상태 변수나 함수의 시그니처는 구현에 따라 변경할 수 있습니다.
 */
contract NFTcreator is ERC721 {

    uint256 private _tokenIds;
    mapping(uint256 => string) tokenURIs; // 토큰URI를 저장할 수 있는 mapping

    event createNFT (uint256 indexed _tokenId, address indexed _owner);

    constructor(string memory _name) ERC721(_name, "SSF") {}

    function current() public view returns (uint256) {
        return _tokenIds;
    }

    //임의의 주소로 전송가능
    // function _baseURI() internal pure override returns (string memory) {
    //     // return "http://localhost:3000/";
    //     return "https://ipfs.io/ipfs/";
    // }

    // tokenId를 매개변수로 호출하면 token를 반환하는 함수
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return tokenURIs[tokenId];
    }

    // 해당 함수를 호출함으로써 호출자가 지정한 tokenURI를 새롭게 발행한다.
    // 내부적으로 새로운 토큰 식별자(tokenId)를 부여받고 _mint()를 호출한다.
    // 상태변수에 토큰 식별자의 toeknURI 정보를 추가한다.
    // 새롭게 생성된 토큰 식별자를 반환한다.
    function create(address to, string memory _tokenURI) public returns (uint256) {
        // TODO
        // require(msg.sender == to, "caller is not match with nft creator(to address)");
        uint256 tokenId = current() + 1;
        tokenURIs[tokenId] = _tokenURI;
        _tokenIds = tokenId;
        _mint(to, tokenId);
        emit createNFT(tokenId, to);
        return tokenId;
    }
    

    //react로부터 받은 ipfs처리된 json파일을 tokenURI에 저장
    // function setTokenURI(uint256 _tokenId, string memory _tokenURI) public {
    //     tokenURIs[_tokenId] = _tokenURI;
    // }

    function getTokenURI(uint256 _tokenId) public view returns (string memory) {
        return tokenURIs[_tokenId];
    }


    //json파일에서 ipfsHash 추출
    function getIpfsHash(string memory _tokenURI) public pure returns (string memory) {
        bytes memory _tokenURIBytes = bytes(_tokenURI);
        uint256 _tokenURIBytesLength = _tokenURIBytes.length;
        bytes memory _ipfsHashBytes = new bytes(_tokenURIBytesLength);
        uint256 _ipfsHashBytesIndex = 0;
        for (uint256 i = 0; i < _tokenURIBytesLength; i++) {
            if (_tokenURIBytes[i] == 0x2f) {
                _ipfsHashBytesIndex = i + 1;
                break;
            }
        }
        for (uint256 i = _ipfsHashBytesIndex; i < _tokenURIBytesLength; i++) {
            _ipfsHashBytes[i - _ipfsHashBytesIndex] = _tokenURIBytes[i];
        }
        return string(_ipfsHashBytes);
    }

    //encodePacked로 https://ipfs.io/ipfs/ + ipfsHash를 합쳐서 tokenURI에 저장
    function setTokenURI(uint256 _tokenId, string memory _ipfsHash) public {
        tokenURIs[_tokenId] = string(abi.encodePacked("https://ipfs.io/ipfs/", _ipfsHash));
    }

   
}
