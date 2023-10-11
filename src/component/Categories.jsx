import { v4 as uuid } from "uuid";

const Categories = [
  {
    id: uuid(),
    name: "김새롬",
    school: "남녕고",
    category: "high",
    image: "../images/IMG_1262.jpeg",
  },
  {
    id: uuid(),
    name: "고하귀",
    school: "하귀초",
    category: "ele",
    image: "../images/IMG_1262.jpeg",
  },
  {
    id: uuid(),
    name: "홍길동",
    school: "서중",
    category: "mid",
    image: "../images/IMG_1262.jpeg",
  },
];
export default Categories;
