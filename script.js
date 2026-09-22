const products=[
{name:"Samsung Galaxy A55 (8GB/256GB)",price:"৳ ৩৪,৯৯০",old:"৳ ৪১,০০০",img:"assets/product-1.svg",rating:"4.8 (120)"},
{name:"কারেন পুরুষের ঘড়ি",price:"৳ ২,২৫০",old:"৳ ৩,২০০",img:"assets/product-2.svg",rating:"4.6 (86)"},
{name:"পুরুষের কটন শার্ট",price:"৳ ৮৫০",old:"৳ ১,১৫০",img:"assets/product-3.svg",rating:"4.5 (74)"},
{name:"তাজা সবজি (৫ কেজি মিক্স)",price:"৳ ৫৫০",old:"৳ ৭৫০",img:"assets/product-4.svg",rating:"4.7 (92)"},
{name:"মিনিকেট চাল (৫ কেজি)",price:"৳ ৩৮০",old:"৳ ৪৮০",img:"assets/product-5.svg",rating:"4.6 (68)"},
{name:"সার্ফ এক্সেল ডিটারজেন্ট (১ কেজি)",price:"৳ ৫৮০",old:"৳ ৭৫০",img:"assets/product-6.svg",rating:"4.5 (102)"},
{name:"মোবাইল ও এক্সেসরিজ",price:"৳ ৯৯০",old:"৳ ১,২৫০",img:"assets/product-7.svg",rating:"4.8 (55)"},
{name:"শিশুদের খেলনা",price:"৳ ৪৫০",old:"৳ ৬০০",img:"assets/product-8.svg",rating:"4.7 (44)"},
{name:"নারীদের গয়না",price:"৳ ১,২০০",old:"৳ ১,৫০০",img:"assets/product-9.svg",rating:"4.6 (38)"},
{name:"জুতা ও স্যান্ডেল",price:"৳ ৭৫০",old:"৳ ৯৫০",img:"assets/product-10.svg",rating:"4.5 (61)"},
{name:"কসমেটিক্স",price:"৳ ৬৫০",old:"৳ ৮৫০",img:"assets/product-11.svg",rating:"4.6 (51)"},
{name:"ইলেকট্রনিক্স",price:"৳ ২,৯৯০",old:"৳ ৩,৫০০",img:"assets/product-12.svg",rating:"4.4 (29)"}
];

let cart=Number(localStorage.getItem("satkaniya_cart")||0);
const count=document.getElementById("cartCount");
count.textContent=cart;

function render(list=products){
 document.getElementById("grid").innerHTML=list.map(p=>`
 <article class="product">
 <img src="${p.img}" alt="${p.name}">
 <div class="product-body">
 <h3>${p.name}</h3>
 <div class="price">${p.price}<span class="old">${p.old}</span></div>
 <div class="rating">★ ${p.rating}</div>
 <button class="add" onclick="addCart()">🛒 কার্টে যোগ করুন</button>
 </div>
 </article>`).join("");
}

function addCart(){
 cart++;
 localStorage.setItem("satkaniya_cart",cart);
 count.textContent=cart;
 const t=document.getElementById("toast");
 t.classList.add("show");
 setTimeout(()=>t.classList.remove("show"),1200);
}

function doSearch(){
 const q=document.getElementById("search").value.trim().toLowerCase();
 render(q?products.filter(p=>p.name.toLowerCase().includes(q)):products);
 document.getElementById("products").scrollIntoView({behavior:"smooth"});
}

document.getElementById("searchBtn").onclick=doSearch;

document.getElementById("search").addEventListener("keydown",e=>{
 if(e.key==="Enter") doSearch();
});

document.getElementById("allBtn").onclick=()=>render();

document.getElementById("catBtn").onclick=()=>{
 document.getElementById("sidebar").classList.toggle("open");
};

render();
