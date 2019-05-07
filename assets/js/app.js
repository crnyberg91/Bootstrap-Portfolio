$(document).ready(function() {


	$("#aboutLink").on("click", function() {
		aboutPage();
	});
	$("#portfolioLink").on("click", function() {
		portfolioPage();
	});
	$("#contactLink").on("click", function() {
		contactPage();
	});

	const aboutPage = () => {
		$(".container").empty();
		$(".container").append(`<div class="header-row">
				  <h1>About</h1>
			      </div>
			      <img src="https://via.placeholder.com/300" class="img-fluid" alt="about-pic" />
			    <p>
				I am Christopher Nyberg, a Latino American coder striving for a career in full stack web development. Although I never
				worked in the web development field professionally before, my prior education and job experience has given me the strengths
				to work in various environments. This includes a solid background in customer service, coordinating with team members even
				across departments, and maintaining a professional work ethic. I hope you can consider me as a strong candidate for the
				position in the company, my drive is to always be an essential member of the team. Thank you for your time. I am Christopher
				Nyberg, a Latino American coder striving for a career in full stack web development. Although I never worked in the web
				development field professionally before, my prior education and job experience has given me the strengths to work in various
				environments. This includes a solid background in customer service, coordinating with team members even across departments,
				and maintaining a professional work ethic. I hope you can consider me as a strong candidate for the position in the company,
				my drive is to always be an essential member of the team. Thank you for your time.
			    </p>`);
	};

	const portfolioPage = () => {
		$(".container").empty();
		$(".container").append(`<div class='row header-row'>
            <h1>Portfolio</h1>
        </div>
        <div class="row">
            <div class="col-9">
                <div class="card bg-dark text-white">
                    <img src="assets/images/abstract1.jpg" class="card-img" alt="abstract1">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><a href='#'>Coming Soon</a></h5>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="assets/images/abstract2.jpg" class="card-img" alt="abstract2">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><a href='#'>Coming Soon</a></h5>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="assets/images/abstract3.jpg" class="card-img" alt="abstract3">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><a href='#'>Coming Soon</a></h5>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="assets/images/abstract4.jpg" class="card-img" alt="abstract4">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><a href='#'>Coming Soon</a></h5>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="assets/images/abstract5.jpg" class="card-img" alt="abstract5">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><a href='#'>Coming Soon</a></h5>
                    </div>
                </div>
            </div>
        </div>`);
	};

	const contactPage = () => {
		$(".container").empty();
		$(".container").append(`    <div class='header-row'>
      <h1>Contact</h1>
    </div>
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name Here">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="button" class="btn btn-success">Submit</button>
    </form>`);
    };
    aboutPage();
});