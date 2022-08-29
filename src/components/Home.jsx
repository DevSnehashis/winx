import React from 'react';

const Home = () => {
    return (
        
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <marquee width="100%" height="100px" direction="left">⏰ Great food… on time. 🍖 Grill, Frill, Chill. 🥓 Imagine the difference. 🍔 Imagine a new taste. 🥘 It’s a flavor explosion.</marquee>
                <div class="carousel-item active">
                    <img src="/assets/img1.png" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='buri'>Cooks and Chefs for Home</h5>
                        <p>Served 60,000 people in 16 cities</p>
                        <a href="*">book now</a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/img2.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='buri bet'>Bartenders for Parties</h5>
                        <p>Up to ₹500 Off</p>
                        <a href="*">book now</a>
                        
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/img3.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className='buri bete'>Caterers for Event</h5>
                        <p>Get 10% Discount</p>
                        <a href="*">book now</a>
                        
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
             
    )
}

export default Home