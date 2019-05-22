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
                  <div class="about-pic-container">
                    <img src="assets/images/aboutPic.jpg" class="img-fluid aboutPic" alt="about-pic" />
                  </div>
                <div class="aboutP">
			        <p class='topP'>
				    I am Christopher Nyberg, a Latino American coder striving for a career in full stack web development. Although I never
				    worked in the web development field professionally before, my prior education and job experience has given me the strengths
				    to work in various environments. This includes a solid background in customer service, coordinating with team members even
				    across departments, and maintaining a professional work ethic. I hope you can consider me as a strong candidate for the
                    position in the company, my drive is to always be an essential member of the team. Thank you for your time. 
                    </p>
                    <p>
                    Currently, this page is under constant construction, so feel free to check in regularly to keep up to date with my progress.
                    </p>
                </div>`);
	};

	const portfolioPage = () => {
		$(".container").empty();
		$(".container").append(`<div class='row header-row'>
            <h1>Portfolio</h1>
        </div>
        <div class="row">
            <div class="col-9">
                <div class="card bg-dark text-white">
                    <img src="assets/images/starwarsGame.png" class="card-img" alt="starwarsGame">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><a href="https://crnyberg91.github.io/unit-4-game/">Star Wars Game</a></h5>
                    </div>
                </div>
                <div class="card bg-dark text-white">
                    <img src="assets/images/watchPad.png" class="card-img" alt="watchPad">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><a href="#">WatchPad</a></h5>
                    </div>
                </div>
                <div class="card bg-dark text-white third-project">
                    <img src="assets/images/triviaGame.png" class="card-img" alt="triviaGame">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><a href='https://crnyberg91.github.io/TriviaGame/'>Trivia Game</a></h5>
                    </div>
                </div>
                <div class="card bg-dark text-white third-project">
                    <img src="assets/images/liriNode.png" class="card-img" alt="liriNode">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><a href='https://github.com/crnyberg91/liri-node-app'>Liri Node</a></h5>
                    </div>
                </div>
                <div class="card bg-dark text-white third-project">
                    <img src="assets/images/friendFinder.png" class="card-img" alt="friendFinder">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><a href='https://whispering-woodland-32754.herokuapp.com/survey'>Friend Finder</a></h5>
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
