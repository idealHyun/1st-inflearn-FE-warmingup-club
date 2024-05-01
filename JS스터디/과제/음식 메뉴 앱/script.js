const foodList = [
	{
		name: "팬케이크",
		price: 6000,
		img: "https://i.namu.wiki/i/DQ4Ayqbx_0l_8763FLJwIsN6E5Qyy97qnVy7OPAI7rTBprHs88rQdFivurZgZ22BlXRg2FIdVZS009D3U58AAQ.webp",
		type: "breakfast",
	},
	{
		name: "토스트",
		price: 5000,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7C3txTqJbBCJyxhM0oB3wzci04rUy-yl2vAXLnjYGRA&s",
		type: "breakfast",
	},
	{
		name: "요거트",
		price: 4000,
		img: "https://i.namu.wiki/i/RHUWtdx3i_zJGT8X-rqXi0FX288hmQpYw-lgsebqSAShwvifcbSB8m_DH8XVhgMHhQSX4vm5Z0fr3UNgrAf3EQ.webp",
		type: "breakfast",
	},
	{
		name: "햄버거",
		price: 7000,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz9kbRFfFEKG2nJ4DOLo69yke7Vo489xJQd1GerdwqyA&s",
		type: "lunch",
	},
	{
		name: "피자",
		price: 8000,
		img: "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
		type: "lunch",
	},
	{
		name: "샐러드",
		price: 6000,
		img: "https://shop.biumfood.com/upload/1623296512image_product044.jpg",
		type: "lunch",
	},
	{
		name: "딸기 쉐이크",
		price: 5000,
		img: "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5296878784/B.jpg?565000000",
		type: "shake",
	},
	{
		name: "초코 쉐이크",
		price: 6000,
		img: "https://sitem.ssgcdn.com/75/72/12/item/1000299127275_i1_750.jpg",
		type: "shake",
	},
	{
		name: "스테이크",
		price: 10000,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvaySaw2o_xpjYEEvRwxau-i3TBtOXQndAyWmfkUt1BA&s",
		type: "dinner",
	},
	{
		name: "파스타",
		price: 8000,
		img: "https://recipe1.ezmember.co.kr/cache/recipe/2022/09/30/8e7eb8e3019532a8dc6d39a9a325aad41.jpg",
		type: "dinner",
	},
];

const explanation = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error adipisci nesciunt natus enim deleniti quasi alias. Provident, inventore mollitia veritatis hic neque nulla rerum eveniet quas, error aliquam nihil.";

// 음식 데이터를 화면에 표시
foodList.forEach((food) => {
	const article = document.createElement("article");
	article.classList.add("food"); //모든 요소에 food라는 클래스 추가
	article.innerHTML = `
    <div class="food-item">
        <img class="food-image" src="${food.img}" alt="${food.name}" />
        <div class="food-info">
            <div class="food-name-price">
                <div class="grey">${food.name}</div>
                <div class="skyblue">${food.price}원</div>
            </div>
            <hr class="food-divider">
            <p class="grey">${explanation}</p>
        </div>
    </div>
`;
	article.classList.add(food.type); //타입에 따라 클래스 추가
	document.querySelector(".foodList").appendChild(article);
});

// 버튼 가져오기
const allBtn = document.querySelector(".all");
const breakfastBtn = document.querySelector(".breakfast");
const lunchBtn = document.querySelector(".lunch");
const shakeBtn = document.querySelector(".shake");
const dinnerBtn = document.querySelector(".dinner");

// 버튼에 맞게 음식 보이기

// 모든 음식 요소의 classList 에 있는 food를 가져와서 display를 block으로 변경
allBtn.addEventListener("click", () => {
	document.querySelectorAll(".food").forEach((food) => {
        food.style.display = "block";
	});
});

// 
breakfastBtn.addEventListener("click", () => {
	document.querySelectorAll(".food").forEach(food => {
        food.style.display = "none";
	});
	document.querySelectorAll(".breakfast").forEach(breakfast => { 
        breakfast.style.display = "block"; // 
    });
});

lunchBtn.addEventListener("click", () => {
	document.querySelectorAll(".food").forEach(food => {
        food.style.display = "none";
	});
	document.querySelectorAll(".lunch").forEach(breakfast => { 
        breakfast.style.display = "block"; // 
    });
});

shakeBtn.addEventListener("click", () => {
	document.querySelectorAll(".food").forEach(food => {
        food.style.display = "none";
	});
	document.querySelectorAll(".shake").forEach(breakfast => { 
        breakfast.style.display = "block"; // 
    });
});

dinnerBtn.addEventListener("click", () => {
    document.querySelectorAll(".food").forEach(food => {
        food.style.display = "none";
	});
	document.querySelectorAll(".dinner").forEach(breakfast => { 
        breakfast.style.display = "block"; // 
    });
});
