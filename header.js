let header = `   <div class="nav" id="nav">
<div class="parent-upper">
    <div class="upper" id="left">
        <a href="./"><img src="logo.png" alt=""></a>
        <div><p class="navigation-slider" onclick="navigationslid()">☰</p></div>
    </div>
    <div class="upper" id="right">
        <span class="icon">
            <a href="Add to bag.html"><i class="fas fa-shopping-bag"></i></a>
            <p>Bag</p>
        </span>
        <span class="icon">
            <i class="far fa-heart"></i>
            <p>Wishlist</p>
        </span>
        <span class="icon">
            <a href="cart.html"><i class="fas fa-truck"></i></a>
            <p>Orders</p>
        </span>
        <span class="icon">
            <i class="fas fa-search"></i>
            <p>Search</p>
        </span>
        <span class="icon">
            <i class="far fa-user"></i>
            <p>Profile</p>
        </span>
        
    </div>
</div>
<div class="lower" id="lower">
    
</div>
</div>`;

document.getElementById('header-content').innerHTML = header;