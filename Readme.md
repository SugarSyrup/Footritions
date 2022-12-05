# Footritions

> 식단 영영정보 계산 사이트

방금 먹은 식사의 영양정보를 계산하여 알려주는 사이트 입니다. 단순 영양정보 제공에 그치지 않고 사용자의 나이와 성별에 맞는 영양성분 필요량을 제공하여 어떤 영양소가 부족했고 어떤 영양소를 과잉 섭취했는지 알려주는 웹사이트 입니다.

## Getting Started
현재 backEnd Server는 heroku에 frontEnd는 netlify에 배포되어 운영되고 있는 상태입니다. frontEnd는 localhost에서도 동작하나 backEnd Server는 localhost에서 동작만 할뿐.. fontEnd와 연동되어 있지 않습니다.

### Prerequisites

NodeJS + React를 이용한 웹 페이지 입니다. 따라서 Node의 설치가 필요합니다. (프로젝트에 사용된 node는 16.17.0 버젼을 사용하고 있습니다)

### Installing

## Running the tests

localhost에서 backEnd 실행 방법 입니다.

```
cd server && npm run start
```

앞서 말한 것 과 같이 localhost의 backend는 frontend와 현재 연동되어 있지 않습니다.

( local환경에서 연동을 원한다면 frontEnd에서의 수정이 필요합니다. )

frontEnd 실행 방법입니다.

```
cd client && npm run start
```

## Deployment

( backEnd Server Link : [fly.io](https://backend-server.fly.dev/)
( frontEnd Server Link : [netlify](https://footritions.netlify.app/))

## Tech Stacks

FrontEnd
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/recoil-FFFFFF?style=for-the-badge&">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<br>

BackEnd
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white">
<br>

## Contributing

## Versioning

We use SemVer for versioning. For the versions available, see the tags on this repository.

**ver 2.0** Update
_ Refactoring : HTML,CSS -> React
_ Create : NodeJS(Express) Server \* Create : Mongo DataBase

**ver 1.0** Deploy!

## Authors

- JaYun Gyeon - Initial work - [SugarSyrup](https://github.com/SugarSyrup)

## License

## Acknowledgments
