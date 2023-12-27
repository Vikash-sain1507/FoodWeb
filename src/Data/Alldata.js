import img1 from '../Images/burger1.jpg'
import img2 from '../Images/burger2.jpg'
import img3 from '../Images/burger3.jpg'
import img4 from '../Images/burger4.jpg'
import img5 from '../Images/burger5.jpg'
import img6 from '../Images/burger6.jpg'
import pizzaimg1 from '../Images/chickenpizza.jpg'
import pizzaimg2 from '../Images/Margheritapizza.jpg'
import pizzaimg3 from '../Images/pepperonipizza.jpg'
import pizzaimg4  from '../Images/pizza4.jpeg'
import pizzaimg6 from  '../Images/pizza6.jpeg'
import pizzaimg7 from '../Images/pizza7.jpeg'
import momoimg1 from '../Images/veg momos.jpg'
import momoimg2 from '../Images/steamed momos.jpg'
import momoimg3 from '../Images/Margherita momos.jpg'
import momoimg4 from '../Images/momo4.jpeg'
import momoimg6 from '../Images/momo6.jpeg'
import momoimg7 from '../Images/momo7.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Alldata = [
    {
      id: 1,
      type: " bison burger ",
      stock: "Available ",
      img: img1,
      info: "The American Heart Association recommended buffalo burgers in 1997 as more heart-healthy than chicken or beef. The burger is high in nutrients such as protein, zinc, and vitamin B12. Buffalo burgers are more healthy than beef because bison do not store as much fat as cattle.",
      fav:
        <FavoriteIcon />
      ,
      mrp: 7,
      discount:"10%",
      quantity:1
    },
    {
      id: 2,
      type: "cheese burger ",
      stock: "Not Available ",
      img: img2,
      info: " A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time. Cheeseburgers can include variations in structure, ingredients and composition.",
      fav:
        <FavoriteIcon />,
        mrp: 9,
        discount:"10%",
        quantity:1
    },
    {
      id: 3,
      type: "chikan burger",
      stock: "Available ",
      img: img3,
      info: "A chicken burger makes for a quick midweek meal or weekend BBQ's with friends! Crispy seasoned chicken breast, topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo. ",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
    },
    {
      id: 4,
      type: "fish burger ",
      stock: " Not Available ",
      img: img4,
      info: "Burger King Big Fish. It's low in fiber, high in sugar, and threatening in its sodium count if you're concerned about sodium counts ",
      fav:
        <FavoriteIcon />
      ,
      mrp: 14,
      discount:"10%",
      quantity:1
    },
    {
      id: 5,
      type: "veggie burger ",
      stock: "Available ",
      img: img5,
      info: "Some veggie burgers use vegetable-sourced protein to imitate meat's texture. Others are simply patties that don't pretend to be anything like a beef burger. Commercially available veggie burgers may contain: Vegetable protein (derived from beans, soy, peas or other source) ",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
    },
    {
      id: 6,
      type: " big burger",
      stock: "Not Available ",
      img: img6,
      info: "Some veggie burgers use vegetable-sourced protein to imitate meat's texture. Others are simply patties that don't pretend to be anything like a beef burger. Commercially available veggie burgers may contain: Vegetable protein (derived from beans, soy, peas or other source) ",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
    },

    {
      id: 7,
      type: " bison pizza ",
      stock: "Available ",
      img: pizzaimg1,
      info: "The American Heart Association recommended buffalo burgers in 1997 as more heart-healthy than chicken or beef. The burger is high in nutrients such as protein, zinc, and vitamin B12. Buffalo burgers are more healthy than beef because bison do not store as much fat as cattle.",
      fav:
        <FavoriteIcon />
      ,
      mrp: 5,
      discount:"10%",
      quantity:1
    },
    {
      id: 8,
      type: "cheese pizza ",
      stock: "Not Available ",
      img: pizzaimg2,
      info: " A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time. Cheeseburgers can include variations in structure, ingredients and composition.",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
    },
    {
      id: 9,
      type: "chikan pizza",
      stock: "Available ",
      img: pizzaimg3,
      info: "A chicken burger makes for a quick midweek meal or weekend BBQ's with friends! Crispy seasoned chicken breast, topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo. ",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
    },
  
  
    {
      id: 10,
      type: "  pizza ",
      stock: "Available ",
      img: pizzaimg4,
      info: "The American Heart Association recommended buffalo burgers in 1997 as more heart-healthy than chicken or beef. The burger is high in nutrients such as protein, zinc, and vitamin B12. Buffalo burgers are more healthy than beef because bison do not store as much fat as cattle.",
      fav:
        <FavoriteIcon />
      ,
      mrp: 5,
      discount:"10%",
      quantity:1
    },
    {
      id: 11,
      type: " pizza ",
      stock: "Not Available ",
      img: pizzaimg6,
      info: " A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time. Cheeseburgers can include variations in structure, ingredients and composition.",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
    },
    {
      id: 12,
      type: "chikan pizza",
      stock: "Available ",
      img: pizzaimg7,
      info: "A chicken burger makes for a quick midweek meal or weekend BBQ's with friends! Crispy seasoned chicken breast, topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo. ",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
    },
  
  

    {
      id: 13,
      type: " bison Momos ",
      stock: "Available ",
      img: momoimg1,
      info: "The American Heart Association recommended buffalo burgers in 1997 as more heart-healthy than chicken or beef. The burger is high in nutrients such as protein, zinc, and vitamin B12. Buffalo burgers are more healthy than beef because bison do not store as much fat as cattle.",
      fav:
        <FavoriteIcon />
      ,
      mrp: 5,
      discount:"10%",
      quantity:1
    },
    {
      id: 14,
      type: "cheese Momos ",
      stock: "Not Available ",
      img: momoimg2,
      info: " A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time. Cheeseburgers can include variations in structure, ingredients and composition.",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
    },
    {
      id: 15,
      type: "chikan Momos",
      stock: "Available ",
      img: momoimg3,
      info: "A chicken burger makes for a quick midweek meal or weekend BBQ's with friends! Crispy seasoned chicken breast, topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo. ",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
    },
  
  
    {
      id: 16,
      type: "  Momos ",
      stock: "Available ",
      img: momoimg4,
      info: "The American Heart Association recommended buffalo burgers in 1997 as more heart-healthy than chicken or beef. The burger is high in nutrients such as protein, zinc, and vitamin B12. Buffalo burgers are more healthy than beef because bison do not store as much fat as cattle.",
      fav:
        <FavoriteIcon />
      ,
      mrp: 5,
      discount:"10%",
      quantity:1
    },
    {
      id: 17,
      type: " Momos ",
      stock: "Not Available ",
      img: momoimg6,
      info: " A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time. Cheeseburgers can include variations in structure, ingredients and composition.",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
  
    },
    {
      id: 18,
      type: " Momos",
      stock: "Available ",
      img: momoimg7,
      info: "A chicken burger makes for a quick midweek meal or weekend BBQ's with friends! Crispy seasoned chicken breast, topped with mandatory melted cheese, piled onto soft rolls with onion, avocado, lettuce, tomato and garlic mayo. ",
      fav:
        <FavoriteIcon />,
        mrp: 5,
        discount:"10%",
        quantity:1
    },
  
  
  ]
  
  