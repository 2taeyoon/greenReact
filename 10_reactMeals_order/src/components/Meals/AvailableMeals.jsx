import React, { useEffect, useState } from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

// const DUMMY_MEALS = [
//     {
//         id: "m1",
//         name: "Sushi",
//         description: "Finest fish and veggies",
//         price: 22.99,
//     },
//     {
//         id: "m2",
//         name: "Schnitzel",
//         description: "A german specialty!",
//         price: 16.5,
//     },
//     {
//         id: "m3",
//         name: "Barbecue Burger",
//         description: "American, raw, meaty",
//         price: 12.9999,
//     },
//     {
//         id: "m4",
//         name: "Green Bowl",
//         description: "Healthy...and green...",
//         price: 18.99,
//     },
// ];

const AvailableMeals = () => {
    const [ meals, setMeals ] = useState([]); // 백엔드에 저장되어 있는 메뉴
    const [ isLoding, setIsLoding ] = useState(true);
    const [ httpError, setHttpError ] = useState(); // 에러문구를 저장하기 위한 상태 설정

    useEffect(()=>{
        const fetchMeals = async ()=>{

            const response = await fetch('https://reactmeals11-default-rtdb.asia-southeast1.firebasedatabase.app//meals.json');

            if(!response.ok){
                throw new Error('404 ERROR : 잦같은 에러 발생');
            }

            const data = await response.json(); // 객체 형식으로 저장됨
            const loadMeals = [];
            
            for(const key in data){
                loadMeals.push({
                    id:key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(loadMeals);
            setIsLoding(false);
        }
        /*
        try {
            fetchMeals();
        } catch(error){
            setIsLoding(false);
            setHttpError(error.message);
        } fetchMeals는 async를 사용 -> 프로미스를 반환 -> 에러 -> 해결책 : 별도의 함수를 만들어 넣어줌
        아래의 방법으로 사용 */

        fetchMeals().catch((error)=>{
            setIsLoding(false);
            setHttpError(error.message);
        })

    }, []);

    if(isLoding){
        return(
            <section className={classes.mealsLoding}>
                <p>Loading...</p>
            </section>
        )
    }

    if(httpError){
        return(
            <section className={classes.mealsError}>
                <p>{httpError}</p>
            </section>
        )
    }


    const mealsList = meals.map((meal) =>
        <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
    )

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    { mealsList }
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;