const categories = {
    '1': {
        'id': '1',
        'img': 'amazon.png',
        'category': {
            '1-1': { 'img': 'amazon1.png', 'text': 'AWS Certified Cloud Practitioner', 'price': '$199' }
        },
        'desc': 'Amazon'
    },
    '2': {
        'id': '2',
        'img': 'microsoftsmall.png',
        'category': {
            '2-1': { 'img': 'microsoft1.png', 'text': 'Microsoft Azure az-104', 'price': '$199' },
            '2-2': { 'img': 'microsoft3.png', 'text': 'Microsoft Azure az-303', 'price': '$199' },
            '2-3': { 'img': 'microsoft2.png', 'text': 'Microsoft Azure az-204', 'price': '$199' },
            '2-4': { 'img': 'microsoft4.png', 'text': 'Microsoft Azure az-900', 'price': '$199' }
        },
        'desc': 'Microsoft'
    },
    '3': {
        'id': '3',
        'img': 'security+.png',
        'category': '',
        'desc': 'CompTIA Security+'
    },
    '5': {
        'id': '5',
        'img': 'p.png',
        'category': {
            '5-1': { 'img': 'pmi1.png', 'text': 'Project Management Professional (PMP)', 'price': '$199' },
            '5-2': { 'img': 'pmi2.png', 'text': 'Risk Management Professional (RMP)', 'price': '$199' },
            '5-3': { 'img': 'pmi3.png', 'text': 'CAPM', 'price': '$199' },
            '5-4': { 'img': 'pmi4.png', 'text': '(PMBOK) 7th Edition', 'price': '$199' }
        },
        'desc': 'Project Management Institue'
    },
    '6': {
        'id': '6',
        'img': 'axelos.png',
        'category': {
            '6-1': { 'img': 'axelos.png', 'text': 'Prince 2 Certification', 'price': '$199' }
        },
        'desc': 'Axelos'
    },
    '7': {
        'id': '7',
        'img': 'learn66.png',
        'category': {
            '7-1': { 'img': 'product/24/null', 'text': 'Six Sigma Black Belt', 'price': '$199' }
        },
        'desc': 'Learn Six Sigma'
    },
    '8': {
        'id': '8',
        'img': 'ciscosmall.png',
        'category':
        {
            '8-1': { 'img': 'cisco1.png', 'text': 'CCNA (Cisco Certified Network Associate)', 'price': '$199' },
            '8-2': { 'img': 'cisco2.png', 'text': 'CCNP (Cisco Certified Network Professional)', 'price': '$199' }
        },
        'desc': 'CISCO'
    },
    '10': {
        'id': '10',
        'img': 'isaca.png',
        'category':
        {
            '10-1': { 'img': 'isaca1.png', 'text': 'CISA', 'price': '$249' },
            '10-2': { 'img': 'isaca2.png', 'text': 'CISM (Certified Information Security Manager)', 'price': '$249' }
        },
        'desc': 'Isaca'
    },
    '9': {
        'id': '9',
        'img': 'isc.png',
        'category': {
            '9-1': { 'img': 'isc.png', 'text': 'CISSP', 'price': '$299' }
        },
        'desc': '(ISC)'
    },
    '4': {
        'id': '4',
        'img': 'togaf.png',
        'category': {
            '4-1': { 'img': 'togaf.png', 'text': 'TOGAF® 9 Combined Part 1 and Part 2', 'price': '$149' }
        },
        'desc': 'TOGAF'
    }
}

// Page 1
let bodystr = ``;
for (let data in categories) {
    bodystr = `${bodystr}
    <a href="category.html?category=${categories[data].id}" class="link"><span class="nav-category">
                   ${categories[data].desc}     
        </span></a>`;
}
document.getElementById('lower').innerHTML = bodystr;

if (document.querySelectorAll('.slide').length != 0) {

    const slideContainer = document.querySelector('.container');
    const slide = document.querySelector('.slides');
    const pre = document.getElementById('pre');
    const next = document.getElementById('next');

    let slides = document.querySelectorAll('.slide');
    let index = 1;
    let set;

    const firstclone = slides[0].cloneNode(true);
    const lastclone = slides[slides.length - 1].cloneNode(true);

    firstclone.id = 'first-clone';
    lastclone.id = 'last-clone';

    slide.append(firstclone);
    slide.prepend(lastclone);

    const slideWidth = slides[index].clientWidth;

    slide.style.transform = `translateX(${-slideWidth * index}px)`;

    const startSlide = () => {
        set = setInterval(() => {
            movenext();
            // if (index == slides.length - 1) {
            //     index = 1;
            // }
        }, 3000);
    }
    slide.addEventListener('transitionend', () => {
        slides = document.querySelectorAll('.slide');
        if (slides[index].id === firstclone.id) {
            slide.style.transition = 'none';
            index = 1;
            slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
        if (slides[index].id === lastclone.id) {
            slide.style.transition = 'none';
            index = slides.length - 2;
            slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
    });

    const movenext = () => {
        slides = document.querySelectorAll('.slide');
        if (index >= slides.length - 1) {
            return;
        }
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '.7s';
    }

    const movepre = () => {
        if (index <= 0) {
            return;
        }
        index--;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '2s';
    }

    slideContainer.addEventListener('mouseenter', () => {
        clearInterval(set);
    });

    slideContainer.addEventListener('mouseleave', startSlide);

    next.addEventListener('click', movenext);

    pre.addEventListener('click', movepre);

    startSlide();

    let category = ``;
    for (let data in categories) {
        category = `${category}
                    <div id='${data}' class="category">
                        <div class="category-inner-container">
                            <div class='category-logo'>
                                <a href="category.html?category=${categories[data].id}">
                                <img src=${categories[data].img}></a>
                            </div>
                            <div class="overflow-auto">
                                <span class='left'>${categories[data].desc}</span>
                                <span class='right'>${Object.keys(categories[data].category).length} courses</span>
                            </div>
                        </div>
                    </div>`;
    }
    document.getElementById('block').innerHTML = category;

    let feature_category = ``;
    feature_category = `${feature_category}
            <div id="feature-category">
                <h2>Featured Courses</h2>
                <div class="feature-logo-container">
                    <div class="feature-img">
                        <img src="pmp.png" alt="">
                        <div class="feature-text">
                            <p><b>Project Management Professinal (PMP)</b></p>
                        </div>
                        <div>
                        <span>$ 199<span>
                        </div>
                    </div>
                    <div class="feature-img">
                        <img src="rmp-png.png" alt="">
                        <div class="feature-text">
                            <p><b>Risk Management Professinal (RMP)</b></p>
                        </div>
                        <div>
                        <span>$ 199<span>
                        </div>
                    </div>
                    <div class="feature-img low">
                        <img src="cissp.png" alt="">
                        <div class="feature-text">
                            <p><b>CISSP</b></p>
                        </div>
                        <div>
                        <span>$ 299<span>
                        </div>
                    </div>
                    <div class="feature-img low">
                        <img src="pmbok.png" alt="">
                        <div class="feature-text">
                            <p><b>(PMBOK) 7th Edition</b></p>
                        </div>
                        <div>
                        <span>$ 199<span>
                        </div>
                    </div>
                </div>
            </div>`;

    document.getElementById('features-course').innerHTML = feature_category;


}


// Category Page
loadCategoryData = () => {
    const id = window.location.search.split('=')[1];
    console.log(categories[id]);
    if (categories[id]) {
        display(id);
    }
}

function display(categoryId) {
    //console.log(categories[categoryId]);
    let categorybody = ``;
    for (let data in categories[categoryId].category) {
        categorybody = `${categorybody}
        <div class="amazon-content" id="amazon-content">
                <div class='category-logo-container'>
                    <a class='category-inside-logo' href="productpage.html?id=${data}"><img src="${categories[categoryId].category[data].img}" alt="not found"></a>
                </div>
                <div class="category-logo-text">
                    <p class="category-logo-text-desc">${categories[categoryId].category[data].text}</p>
                    <p>${categories[categoryId].category[data].price}</p>
                </div>
        </div>
        `;
    }
    document.getElementById('category-data').innerHTML = categorybody;
}


//Product Page
loadProductData = () => {
    const productId = window.location.search.split('=')[1];
    const categoryid = productId.substring(0, 1);
    //console.log(categoryid);
    if (categories[categoryid].category[productId]) {
        displayproduct(categoryid, productId);
    }
}

function displayproduct(categoryid, productId) {
    let productbody = ``;
    productbody = `${productbody}
        <div class="product-main-container">
            <div class="product-img">
                <img src=${categories[categoryid].category[productId].img} alt="hjfbghevyv">
            </div>
            <div class='product-text'>
                <h2>${categories[categoryid].category[productId].text}</h2>
                <br>
                <p style="margin-top: 0;">Amazon web service</p>
                <br>
                <h2 style="margin-top: 0;">${categories[categoryid].category[productId].price}</h2>
                <br>
                <h2 class="product-detail">Product Details</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, corrupti?</p>
                <hr>
                <p><b>Total Price</b></p>
                <p>${categories[categoryid].category[productId].price}</p>
                    <div class="main-product-btn">
                        <button class="product-btn" type="submit" onclick='add_to_bag("${productId}")'><span class="product-btn-icon"><i class="fas fa-shopping-bag"></i></span>Add to bag</button>
                    </div>
            </div>
        </div>
                    `;
    document.getElementById('product-data').innerHTML = productbody;
}

// ADD ADDRESS BUTTON
add_address = () => {
    let addstr = ``;

    addstr = `${addstr}
    <div>
        <div class="form-container">
            <h3>Add New Address</h3>
            <form action="">
                <input type="text" id="Reciever Name" placeholder="Reciever Name">
                <br><br>
                <input type="text" id="Reciever Contact No." placeholder="Reciever Contact No.">
                <br><br>
                <input type="text" id="Block And House No." placeholder="Block And House No.">
                <br><br>
                <input type="text" id="City" placeholder="City">
                <br><br>
                <input type="text" id="Pincode/Zipcode" placeholder="Pincode/Zipcode">
                <br><br>
                <input type="text" id="Country Name" placeholder="Country Name">
                <br><br>
                <div class="form-button" onclick="save_address()">
                <button type="submit">Save Address</button>
                </div>
            </form>
            
        </div> 
    </div>`;
    document.getElementById('add-address-form').innerHTML = addstr;
}

//Save Address
function save_address() {
    let name = document.getElementById('Reciever Name').value;
    let contact_no = document.getElementById('Reciever Contact No.').value;
    let city = document.getElementById('City').value;
    let pincode = document.getElementById('Pincode/Zipcode').value;
    let country_Name = document.getElementById('Country Name').value;

    let obj_address = { 'Name': `${name}`, 'contact_no': `${contact_no}`, 'city': `${city}`, 'pincode': `${pincode}`, 'country_name': `${country_Name}` };

    if (obj_address.Name) {
        let localStorageAdd_data = localStorage.getItem('add_address');
        if (!localStorageAdd_data) {
            localStorageAdd_data = [];
        } else {
            localStorageAdd_data = JSON.parse(localStorageAdd_data);
        }
        localStorageAdd_data.push(obj_address);
        localStorage.setItem('add_address', JSON.stringify(localStorageAdd_data));
    }
}

//ADD_TO_BAG FUNCTION
function add_to_bag(productId) {
    let localStorageData = localStorage.getItem('add_to_bag')
    console.log(localStorageData);
    if (!localStorageData) {
        localStorageData = {};
    } else {
        localStorageData = JSON.parse(localStorageData);
    }
    localStorageData[productId] = 1;
    localStorage.setItem('add_to_bag', JSON.stringify(localStorageData));

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'ITEM ADDED SUCCESSFULLY',
        showConfirmButton: false,
        timer: 1000
    })
}


//BAG FUNCTION
function cart() {
    let sum = 0;
    let obj = JSON.parse(localStorage.getItem('add_to_bag'));
    let obj_address = JSON.parse(localStorage.getItem('add_address'));
    let addressstr = ``;
    let cartstr = ``;
    let bagstr = ``;
    for (let data in obj) {
        sum = sum + parseInt(categories[data[0]].category[data].price.substr(1));
        cartstr = `${cartstr}
        <div class="cart-inner-item">
            <div class="data-cart-img">
                <img src=${categories[data[0]].category[data].img} alt="">
            </div>
            <div class="data-cart-title">
                    <h4>${categories[data[0]].category[data].text}</h4>
                    <p onclick="remove('${data}')">REMOVE</p>
            </div>
            <div class="data-cart-price">
                    <h4>${categories[data[0]].category[data].price}</h4>
            </div>
        </div>`;
    }

    bagstr = `${bagstr}
        <div class="inside-bag-total">
            <div class="bag-heading">
                <h3>Bag Total</h3>
            </div>
            <div class="bag-details-container">
                <div class="bag-details-left">
                    <p>Products amount</p>
                    <p>Total Discount</p>
                    <p>Total Bill</p>
                </div>
                <div class="bag-details-right">
                    <p>$ ${sum}</p>
                    <p>- $ 0</p>
                    <p>$ ${sum}</p>
                </div>
            </div>
            <div class="bag-buy-now-btn" onclick='buy_now()'>
                <button>Buy Now</button>
            </div>
        </div>
        `;

    if (obj_address) {
        for (let data of obj_address) {
            addressstr = `${addressstr}
        <div>
            <div class="add-address">
                <p>Name : ${data.Name}</p>
                <p>Contact No. : ${data.contact_no}</p>
                <p>City : ${data.city}, ${data.pincode}, ${data.country_name}</p>
            </div>
            <div class="add-address-check">
                <input type="checkbox">
            </div>
        <div>    
        `;
        }
    }

    document.getElementById('data-cart').innerHTML = cartstr;
    document.getElementById('bag-total').innerHTML = bagstr;
    document.getElementById('add-address').innerHTML = addressstr
}

//BUY NOW BUTTON
function buy_now() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'ITEM PLACED SUCCESSFULLY',
        showConfirmButton: false,
        timer: 1500
    })
}

//cart Page
function cart_summary()
{
    let cart_data = document.querySelector('#cart-main-container');
    let cartStr = ``;
    let obj = localStorage.getItem('add_to_bag');
    obj = JSON.parse(obj);
    console.log(obj);

    if(!obj || Object.keys(obj).length==0)
    {
        let id = document.querySelector('#cart-main-container .cart-empty');
        id.style.display="block";
        document.getElementById('cart-inner-head').style.display="none";
    }
    else
    {
        document.getElementById('cart-inner-head').style.display="block";
        let j=1;
        for(let data in obj)
        {
            cartStr = `${cartStr}
            <div class="order-1">
                            <div class="order-1-div">
                                <div class="left-div">
                                    <span>Order ID ${j}</span>
                                    <div onclick = "view_pdt('${data}')">
                                        <button>
                                            View Order Details
                                        </button>
                                    </div>
                                </div>
                                <div class="centre-div">
                                    <span>Price Total: ${categories[data[0]].category[data].price}</span>
                                </div>
                                <div class="right-div">
                                    <span>Order Status: Pending</span>
                                </div>
                            </div>
                            <div id="${data}" class="view-pdt-main-div">
                                <div class="view_pdt-det">
                                    <div class="order-det">
                                        <h3>Order Details</h3>
                                        <hr>
                                        <div class="pdt-order-det">
                                                <img src=${categories[data[0]].category[data].img} alt="">
                                            <div class="pdt-order-name">
                                                <h3>${categories[data[0]].desc}</h3>
                                                <span>${categories[data[0]].category[data].price}/-</span>
                                            </div>
                                            <button>Buy it Again</button>  
                                        </div>
                                        <hr>
                                    </div>
                                    <div class="billing-det">
                                        <div class="billing-det-heading">
                                            <h5>Billing Details</h5>
                                        </div>
                                        <div class="billing-head"> 
                                            <div class="order-date-left">
                                                <h3>Order ID : #</h3>
                                                <h5>Order Date: </h5>
                                                <p>Total items: </p>
                                                <p>Items price Total: </p>
                                                <p>Discount: </p>
                                                <h5>Total Price: </h5>
                                            </div>
                                            <div class="order-date-right">
                                                <h5>27 July</h5>
                                                <span>1</span>
                                                <span>${categories[data[0]].category[data].price}</span>
                                                <span>$ 0</span>
                                                <span>${categories[data[0]].category[data].price}</span>        
                                            </div>
                                        </div>
                                        <div class="billing-head">
                                            <div class="billing-add-left">
                                                <h3>Billing Address</h3>
                                                <p>Name: </p>
                                                <p>Address: # </p>
                                                <p>Phone no. </p>
                                            </div>
                                            <div class="billing-add-right">
                                                <span>Anukul</span>
                                                <div class="billing-address">
                                                    <h5>Near, Durja Talkies, Kaimganj, Farrukhabad</h5>
                                                </div>
                                                <span>123455788990</span>
                                            </div>        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                        j++;
        }
        document.getElementById('cart-container').innerHTML = cartStr;
    }
}

//remove item from bag
 function remove(j)
 {
    let obj = JSON.parse(localStorage.getItem('add_to_bag'));
    delete obj[j];
    localStorage.setItem('add_to_bag', JSON.stringify(obj));
    cart();
 }

 function view_pdt(id)
 {
    console.log(document.getElementById(id));
    document.getElementById(id).style.display="block";
 }

 //Navigation-Slider
 var flag = false;
 function navigationslid()
 {
    if(flag)
    {
        document.getElementsByClassName('lower')[0].style.display = "none"; 
        flag = false;
    }
    else
    {
        document.getElementsByClassName('lower')[0].style.display = "block";
        flag = true;
    }
 }
 