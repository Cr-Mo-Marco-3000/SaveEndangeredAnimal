# 특화프로젝트

<div align="center">
  <br />
  <img src="/uploads/db0e281172599cf15f744dff6ec7031d/sea.png" alt="Save Endangered Animal" />
  <br />
  <h1>서비스 개요</h1>
  <br />
</div>

## 목차

1. [**서비스 소개**](#1)
2. [**기술 스택**](#2)
3. [**시스템 아키텍처**](#3)
4. [**주요기능 및 데모영상**](#4)
5. [**UCC 보러가기**](#5)
6. [**협업 관리**](#6)
7. [**개발 멤버 소개**](#7)
8. [**프로젝트 기간**](#8)
9. [**프로젝트 관련 문서**](#9)

<br/>

<div id="1"></div>

## 💡 서비스 소개

### 서비스 모토

> 서비스 소개

#### 서비스에 대한 한마디

<br/>

<div id="2"></div>

## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=NGINX&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/IPFS-65C2CB?style=for-the-badge&logo=IPFS&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<br>
<img src="https://img.shields.io/badge/Java-FF7800?style=for-the-badge&logo=Java&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/JPA-000000?style=for-the-badge" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=Gradle&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<br>

<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<br>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Node.js-339939?style=for-the-badge&logo=Node.js&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Web3.js-F16822?style=for-the-badge&logo=Web3.js&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>

<br>
<img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/GitLab-FCA121?style=for-the-badge&logo=GitLab&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <br/>

<details><summary> <b> 상세 기술스택 및 버전</b> </summary>

| 구분            | 기술스택            | 상세내용               | 버전          |
| ------------- | --------------- | ------------------ | ----------- |
| 공통            | 형상관리            | Gitlab             | \-          |
|               | 이슈관리            | Jira               | \-          |
|               | 커뮤니케이션          | Mattermost, Notion | \-          |
| BackEnd       | DB              | MySQL              | 5.7         |
|               |                 | JPA                | \-          |
|               | Java            | Zulu               | 8.33.0.1    |
|               | Spring          | Spring             | 5.3.6       |
|               |                 | Spring Boot        | 2.4.5       |
|               | IDE             | IntelliJ           | 2022.1.3    |
|               | Cloud Storage   | AWS S3             | \-          |
|               | Build           | Gradle             | 7.3.2       |
|               | API Docs        | Postman            |             |
| SmartContract |                 | Solidity           | ^0.8.4      |
|               | IDE             | Remix              | 0.26.3      |
| FrontEnd      | HTML5           |                    | \-          |
|               | CSS3            |                    | \-          |
|               | JavaScript(ES6) |                    | \-          |
|               | React           | React              | 17.0.0      |
|               | IDE             | Visual Studio Code | 1.70.0      |
| Server        | 서버              | AWS EC2            | \-          |
|               | 플랫폼             | Ubuntu             | 20.04.3 LTS |
|               | CI/CD           | Docker             | 20.10.17    |
|               |                 | Jenkins            | 2.361.1     |

</details>

<br />

<div id="3"></div>

## 🗂️ 시스템 아키텍처

| 시스템 구성                                                       |
|:------------------------------------------------------------:|
| ![image](/uploads/e1c169d90d2a64ea1ca0db3ab873b999/아키텍쳐.png) |

<br />

<div id="4"></div>

## 🖥️ 주요기능

### 주요 기능 1

- 기능 설명 1
- 기능 설명 2
- 기능 설명 3

| 주요기능 1                             |
|:----------------------------------:|
| <img src="이미지 url" alt="주요기능 1" /> |

### 주요 기능 2

- 기능 설명 1
- 기능 설명 2
- 기능 설명 3

| 주요기능 2                             |
|:----------------------------------:|
| <img src="이미지 url" alt="주요기능 2" /> |

### 주요 기능 3

- 기능 설명 1
- 기능 설명 2
- 기능 설명 3

| 주요기능 3                             |
|:----------------------------------:|
| <img src="이미지 url" alt="주요기능 3" /> |

<br/>

<div id="5"></div>

## 🎥 [UCC 보러가기](https://youtu.be/m4tpFUsXdW0)

<br />

## 👥 협업 관리

| Jira BurnDown Chart                                               |
|:-----------------------------------------------------------------:|
| <img src="/uploads/de0207b34e34600505f418c938df5e9b/번다운차트.PNG" /> |

| Notion                                                                                                                            |
|:---------------------------------------------------------------------------------------------------------------------------------:|
| <img src="/uploads/b4440910464b9dd6946775f0a57c9c1d/API명세서.PNG" /><img src="/uploads/0b30656d36d9a334f9d4b8c315b4cfc5/회의록.PNG" /> |

<br />

## 👪 개발 멤버 소개

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/Cr-Mo-Marco-3000">
            <img src="./assets/김현영.jpg" width="140px" /> <br><br> 👑 김현영 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/깃허브 링크">
            <img src="./assets/성성민.jpg" width="140px" /> <br><br> 🙂 성성민 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/깃허브 링크">
            <img src="./assets/이종인.jpg" width="140px" /> <br><br> 😆 이종인 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/SilverLight96">
            <img src="./assets/강경은.jpg" width="140px" /> <br><br> 😁 강경은 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/kkh9700">
            <img src="./assets/김경환.jpg" width="140px" /> <br><br> 😶 김경환 <br>(Back-End) </a> <br></td>
    </tr>
    <tr>
        <td align="center">UI/UX<br/>React<br/>Web3.js<br/>FastAPI</td>
        <td align="center">UI/UX<br/>React<br</td>
        <td align="center">UI/UX<br/>React</td>
        <td align="center">REST API<br/>Smart Contract<br/></td>
        <td align="center">REST API<br/>DB<br/>S3<br/>CI/CD<br/></td>
    </tr>
</table>

<br />

<div id="8"></div>

<div id="8"></div>

## 📆 프로젝트 기간

### 22.8.22 ~ 22.10.7

- 기획 및 설계 : 22.8.22 ~ 22.9.09
- 프로젝트 구현 : 22.9.12 ~ 22.9.30
- 버그 수정 및 산출물 정리 : 22.10.03 ~ 22.10.07

<br />

<div id="9"></div>

## 📋 프로젝트 관련 문서

| 구분      | 링크                                                                                                                      |
|:------- |:-----------------------------------------------------------------------------------------------------------------------:|
| 와이어프레임  | [와이어프레임 바로가기](https://www.figma.com/file/6AqH2FhNiE8bfmz9ejHpCT/%ED%8A%B9%ED%99%94-5%EB%B0%98-6%EC%A1%B0?node-id=0%3A1) |
| ERD     | [ERD 바로가기](https://www.erdcloud.com/d/cwdAmY6DuYgX46o2F)                                                                |
| 빌드/배포   | [빌드/배포 바로가기](빌드/배포 주소)                                                                                                  |
| 시연 시나리오 | [시연 시나리오 바로가기](시연시나리오 주소)                                                                                               |
| 발표자료    | [발표자료 바로가기](발표자료 주소)                                                                                                    |
